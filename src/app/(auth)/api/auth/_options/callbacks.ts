
import { Session } from "next-auth";
import { User } from "next-auth";

const sessionCallback = async ({ session, user }: { session: Session, user: User }) => {
  if (session.user) {
    session.user.image = user.image;
    session.user.id = user.id;
  }
  return Promise.resolve(session);
}

const signInCallback = async ({ user }: { user: User }) => user.disabled ? false : true;

export { sessionCallback, signInCallback }

