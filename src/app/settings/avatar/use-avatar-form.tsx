import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useCallback, useState, useTransition } from "react";

import { saveAvatar } from "./data/actions";

import { AvatarEnum } from "@/app/(auth)/api/auth/types";
import { recordPlausibleEvent } from "@/lib/plausible";

export const useAvatarForm = (initialValue: AvatarEnum, callbackUrl: string) => {
  const [avatar, setAvatar] = useState<AvatarEnum>(initialValue)
  const { update: updateSession } = useSession();
  const [isPending, startTransition] = useTransition();

  const router = useRouter()

  const handleSubmit = useCallback(async () => {
    startTransition(async () => {
      if (avatar !== initialValue) {
        await saveAvatar(avatar)
        await updateSession();
      };
      router.push(callbackUrl)
      await recordPlausibleEvent("avatar-changed", { avatar })
    })
  }, [avatar, initialValue, callbackUrl, router, updateSession]);

  return {
    avatar,
    setAvatar,
    handleSubmit,
    isPending
  };
};
