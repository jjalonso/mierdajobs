import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";

import { ExtendedAdapter } from "../extended-adapter";

import { sessionCallback, signInCallback } from "./callbacks";
import sendVerificationRequest from "./send";

import { clientPromise } from "@/lib/mongodb/client";

const authOptions = {
  adapter: ExtendedAdapter(clientPromise, { databaseName: process.env.MONGODB_DATABASE }),
  pages: {
    signIn: "/signin",
    verifyRequest: "/signin/verify",
    newUser: "/settings/avatar",
    // TODO: Implement error page when link is used or similar
    // api/auth/error?error=Verification 
  },
  providers: [
    EmailProvider({ sendVerificationRequest }),
  ],
  callbacks: {
    session: sessionCallback,
    signIn: signInCallback
  }
} satisfies NextAuthOptions;

export default authOptions