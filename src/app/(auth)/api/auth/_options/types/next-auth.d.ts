import { DefaultSession } from "next-auth"

declare module "next-auth" {

  interface Session {
    user: {
      id: string
    } & DefaultSession["user"]
  }

  interface User extends DefaultSession["user"] {
    disabled?: boolean;
  }
}