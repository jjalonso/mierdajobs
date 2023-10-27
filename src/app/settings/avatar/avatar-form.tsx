'use client';

import { AvatarPicker } from '@/components/avatar-picker';
import { Button } from '@/components/button';
import { initial } from 'lodash';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

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
  }, []);

  return (
    <>
      <AvatarPicker
        value={avatar}
        onChange={setAvatar}
      />
      <p className='text-sm text-center text-gray-dark'>Tu avatar cambiara en todas tus reviews</p>
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
