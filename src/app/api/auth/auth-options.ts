import { NextAuthOptions, Session, User } from "next-auth";
import EmailProvider from "next-auth/providers/email";

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