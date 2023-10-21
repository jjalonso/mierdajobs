"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"

import { Button, ButtonProps } from "./button"

interface Props extends ButtonProps {
  noIcon?: boolean
}

const BackButton = ({ children, noIcon = false, ...props }: Props) => {
  const router = useRouter();

  return (
    <Button
      onClick={router.back} {...props}>
      {noIcon ? null : <ArrowLeftIcon className="h-6 w-6" />}
      {children}
    </Button>
  )
}

export default BackButton