import NextAuth from "next-auth"

import nextAuthOptions from "../_options/options";

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }