import { Dialog as HDialog, Transition } from "@headlessui/react"
import { Fragment } from "react"

import { Heading } from "./heading"
import Paper from "./paper"

interface Props {
  isOpen?: boolean
  onClose?: () => void
  title: string
  children: React.ReactNode
}

const Dialog = ({ isOpen = false, onClose = () => { }, title, children }: Props) => {
  return (
    <Transition
      show={isOpen}
      as={Fragment}
    >
      <HDialog
        className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-4 pt-60"
        onClose={onClose}
        open={isOpen}
      >
        <Transition.Child
          enter="transition duration-200 ease-out"
          enterFrom="transform scale-90 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-90 opacity-0"
        >
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
        </Transition.Child>
      </HDialog>
    </Transition>
  )
}

export default Dialog;