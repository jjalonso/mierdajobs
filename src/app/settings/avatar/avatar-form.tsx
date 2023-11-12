"use client";

import React from "react";

import { useAvatarForm } from "./use-avatar-form";

import { AvatarEnum } from "@/app/(auth)/api/auth/types";
import { AvatarPicker } from "@/components/avatar-picker";
import { Button } from "@/components/button";

interface Props {
  initialValue: AvatarEnum
  callbackUrl: string
}

const AvatarForm = ({ initialValue, callbackUrl }: Props) => {
  const { avatar, setAvatar, handleSubmit } = useAvatarForm(initialValue, callbackUrl);

  return (
    <>
      <AvatarPicker
        value={avatar}
        onChange={setAvatar}
      />
      <p className="text-center text-sm text-gray-dark">Tu avatar cambiara en todas tus reviews</p>
      <Button
        className="w-full"
        onClick={handleSubmit}
      >
        Guardar
      </Button>
    </>
  )
}

export default AvatarForm;
