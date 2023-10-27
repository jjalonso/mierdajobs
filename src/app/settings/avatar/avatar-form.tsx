"use client";

import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

import { AvatarPicker } from "@/components/avatar-picker";
import { Button } from "@/components/button";

interface Props {
  initialValue: string | null | undefined
  callbackUrl: string
}

const AvatarForm = ({ initialValue, callbackUrl }: Props) => {
  const [avatar, setAvatar] = React.useState(initialValue)
  const router = useRouter()

  const handleContinue = useCallback(() => {
    // TODO: call saveAvatar(avatar)
    router.push(callbackUrl)
  }, [router, callbackUrl]);

  return (
    <>
      <AvatarPicker
        value={avatar}
        onChange={setAvatar}
      />
      <p className="text-center text-sm text-gray-dark">Tu avatar cambiara en todas tus reviews</p>
      <Button
        className="w-full"
        onClick={handleContinue}
      >
        Continuar
      </Button>
    </>
  )
}

export default AvatarForm;
