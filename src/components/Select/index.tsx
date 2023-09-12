import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Fragment, ReactNode } from 'react';

import SelectOption from './SelectOption';
import Props from "./props"

const Select: React.FC<Props> = ({ children, placeholder, disabled }) =>
  <Listbox disabled={disabled}>
    <div className="relative mt-1">
      <Listbox.Button
        className="group relative h-11 w-full cursor-pointer rounded-lg border border-gray bg-white pl-3 pr-10 text-left text-black focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-light disabled:text-gray">
        {({ value }) =>
          <>
            <span className="block truncate">
              {value ?
                <span>{value?.name}</span>
                :
                <span className='text-gray-dark'>{placeholder}</span>

              }
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">

              <ChevronUpDownIcon
                className="h-6 w-6 text-primary group-disabled:text-gray-dark"
                aria-hidden="true"
              />
            </span>
          </>
        }
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray bg-white py-1 text-base drop-shadow-sm focus:outline-none">
          {children}
        </Listbox.Options>
      </Transition>
    </div>
  </Listbox>

export { Select, SelectOption };