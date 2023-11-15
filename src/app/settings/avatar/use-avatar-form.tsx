import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useCallback, useState, useTransition } from "react";

import { saveAvatar } from "./data/actions";

import { AvatarEnum } from "@/app/(auth)/api/auth/types";

export const useAvatarForm = (initialValue: AvatarEnum, callbackUrl: string) => {
  const [avatar, setAvatar] = useState<AvatarEnum>(initialValue)
  const { update: updateSession } = useSession();
  const [isPending, startTransition] = useTransition();

  const router = useRouter()

  const handleSubmit = useCallback(async () => {
    startTransition(async () => {

      await saveAvatar(avatar)
      updateSession();
      fetch(callbackUrl)
      router.push(callbackUrl)

    })
  }, [avatar, updateSession, router, callbackUrl]);

  return {
    avatar,
    setAvatar,
    handleSubmit,
    isPending
  };
};
