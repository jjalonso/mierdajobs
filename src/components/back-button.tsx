"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"

import { Button } from "./button"

const BackButton = () => {
  const router = useRouter();

  return (
    <Button onClick={router.back}>
      <ArrowLeftIcon className="h-6 w-6" />
      Volver
    </Button>
  )
}

export default BackButton