import { Session, User } from "next-auth";

const sessionCallback = async ({ session, user }: { session: Session, user: User }) => {
  if (session.user) {
    session.user.image = user.image;
  }
  return Promise.resolve(session);
}

export { sessionCallback }