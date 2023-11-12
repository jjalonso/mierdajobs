import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { saveAvatar } from "./actions";

import { AvatarEnum } from "@/app/(auth)/api/auth/types";

export const useAvatarForm = (initialValue: AvatarEnum, callbackUrl: string) => {
  const [avatar, setAvatar] = useState<AvatarEnum>(initialValue)
  const router = useRouter()

  const handleSubmit = useCallback(async () => {
    await saveAvatar(avatar)
    router.push(callbackUrl)
  }, [avatar, router, callbackUrl]);

  return {
    avatar,
    setAvatar,
    handleSubmit,
  };
};
