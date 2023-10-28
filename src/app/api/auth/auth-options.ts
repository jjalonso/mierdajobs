import { NextAuthOptions, Session, User } from "next-auth";
import EmailProvider, { SendVerificationRequestParams } from "next-auth/providers/email";
import nodemailer from "nodemailer"

import { emailHtml, emailText } from "./email";
import { ExtendedAdapter } from "./extended-adapter";

import clientPromise from "@/lib/mongodb/client";

const authOptions = {
  adapter: ExtendedAdapter(clientPromise, { databaseName: process.env.MONGODB_DATABASE }),
  pages: {
    signIn: "/signin",
    verifyRequest: "/signin/verify-email",
    newUser: "/settings/avatar",
    // TODO: Implement error page when link is used or similar
    // api/auth/error?error=Verification 
  },
  providers: [
    EmailProvider({
      sendVerificationRequest: async (params: SendVerificationRequestParams) => {
        const { identifier, url, provider } = params
        const { host } = new URL(url)
        // NOTE: You are not required to use `nodemailer`, use whatever you want.
        const transport = nodemailer.createTransport(provider.server)
        const result = await transport.sendMail({
          to: identifier,
          from: provider.from,
          subject: `Sign in to ${host}`,
          text: emailText({ url, host }),
          html: emailHtml({ url, host }),
        })
        const failed = result.rejected.concat(result.pending).filter(Boolean)
        if (failed.length) {
          throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`)
        }
      },
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],

  callbacks: {
    session: async ({ session, user }: { session: Session, user: User }) => {
      if (session.user) {
        session.user.image = user.image;
      }
      return Promise.resolve(session);
    },
  }
} satisfies NextAuthOptions;

export default authOptions