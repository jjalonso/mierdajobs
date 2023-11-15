import { Dialog as HDialog } from "@headlessui/react"

import { Heading } from "./heading"
import Paper from "./paper"

interface Props {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

const Dialog = ({ isOpen, onClose, title, children }: Props) => {
  return (

    <HDialog
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-4 pt-60"
      open={isOpen}
      onClose={onClose}>
      <Paper className="shadow-2xl md:w-fit">
        <HDialog.Panel>
          <HDialog.Title className="mb-8">
            <Heading level={2}>
              {title}
            </Heading>
          </HDialog.Title>
          {children}
        </HDialog.Panel>
      </Paper>
    </HDialog>
  )
}

export default Dialog;