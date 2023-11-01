import NextAuth from "next-auth"

import nextAuthOptions from "../_options/config";

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }