import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { saveAvatar } from "./actions";

export const useAvatarForm = (initialValue: string, callbackUrl: string) => {
  const [avatar, setAvatar] = useState(initialValue)
  const router = useRouter()

  const handleSubmit = useCallback(async () => {
    await saveAvatar(avatar);
    router.push(callbackUrl)
  }, [avatar, router, callbackUrl]);

  return {
    avatar,
    setAvatar,
    handleSubmit,
  };
};
