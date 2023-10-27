"use client";

import { UserImageEnum } from "@/app/api/auth/types";
import { RadioGroup as HRadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";


interface AvatarPickerProps<T> {
  value: T
  onChange: (value: T) => void
}

interface AvatarPickerOptionProps<T> {
  value: T
  className?: string
}

const AvatarPicker = <T,>({ value, onChange }: AvatarPickerProps<T>) =>
  <HRadioGroup
    className="flex flex-col items-center gap-4"
    value={value}
    onChange={onChange}
  >
    <Image
      src={`/avatars/${value}.png`}
      width="100"
      height="100"
      quality={100}
      alt="Selected avatar"
      className="mb-6 rounded-full border-4 border-secondary bg-secondary"
    />
    <div className="flex w-96 flex-wrap items-center justify-center gap-2">
      {Object.values(UserImageEnum).map(avatarId =>
        <AvatarPickerOption
          key={avatarId}
          value={avatarId}
        />
      )}
    </div>
  </HRadioGroup>

const AvatarPickerOption = <T,>({ value }: AvatarPickerOptionProps<T>) =>
  <HRadioGroup.Option value={value} className="        
    m-2 
    h-16
    w-16
    cursor-pointer 
    rounded-full 
    border-[3px] 
    border-secondary
    overflow-hidden
    relative
    flex
  ">
    {/* TODO: Create avatar component */}
    <div className="absolute opacity-80 ui-checked:flex hidden w-full h-full bg-primary justify-center items-center">
      <CheckIcon className="w-8 h-8 text-white block" />
    </div>
    <Image
      className="bg-secondary"
      src={`/avatars/${value}.png`}
      width={50}
      height={50}
      alt={`Avatar ${value}`}
    />
  </HRadioGroup.Option>

export { AvatarPicker, AvatarPickerOption };
export type { AvatarPickerProps, AvatarPickerOptionProps }