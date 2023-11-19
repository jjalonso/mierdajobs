"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

import { Button } from "@/components/button"
import { Heading } from "@/components/heading"

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image
        className="mb-8"
        src="/objects/plunger.png"
        alt="Desatascador"
        width={150}
        height={0}
        quality={100}
      />
      <Heading
        level={1} size="xl" className="mb-4 text-white">
        Parece que hubo un problema.
      </Heading>
      <p className="mb-12 text-white">Es posible que el problema sea momentáneo y no vuelva a ocurrir</p>
      <div className="flex w-full flex-col justify-center gap-4 md:flex-row">
        <Button
          className="w-full"
          variant="primary" onClick={() => reset()}>
          Reintentar
        </Button>
        <Link href="/">
          <Button
            className="w-full"
            variant="secondary">
            Volver al inicio
          </Button>
        </Link>
      </div>
    </div >
  )
}
export default Error;