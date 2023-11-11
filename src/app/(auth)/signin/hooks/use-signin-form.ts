import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";

interface UseSigninFormReturn {
  email: string;
  setEmail: (email: string) => void;
  handleSignIn: () => void;
  isLoading: boolean;
}

export const useSignInForm = (callbackUrl?: string): UseSigninFormReturn => {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSignIn = useCallback(() => {
    setLoading(true);
    signIn("email", { email, callbackUrl });
  }, [callbackUrl, email])

  return { email, setEmail, isLoading, handleSignIn };
};
