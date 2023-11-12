"use client"
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
    <div>
      <Heading level={1}>Parece que tuvimos un error...</Heading>
      <Button onClick={() => reset()}>
        Inténtalo de nuevo
      </Button>
    </div>
  )
}
export default Error;