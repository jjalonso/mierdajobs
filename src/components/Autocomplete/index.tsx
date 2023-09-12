import { Combobox, Transition } from '@headlessui/react'
import { ArrowPathIcon, BuildingStorefrontIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';

import Option from './Option';
import { ValueType } from './Option/props';
import Props from "./props"

const Autocomplete: React.FC<Props> = ({ children, onQueryChange, disabled, placeholder }) =>
  <Combobox disabled={disabled}>
    <div className="relative mt-1">
      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon className={`z-10 h-6 w-6 ${disabled ? 'text-gray-dark' : 'text-primary'}`} />
      </span>

      <div className="relative h-11 w-full cursor-default overflow-hidden rounded-lg border border-gray bg-white text-left focus:outline-none">
        <Combobox.Input
          className="h-full w-full border-none py-2 pl-11 placeholder:text-gray-dark focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-light disabled:text-gray"
          placeholder={placeholder}
          autoComplete={'off'}
          onChange={(e) => onQueryChange?.(e.currentTarget.value)}
          displayValue={(value: ValueType) => value?.name}
        />

      </div>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray bg-white py-1 drop-shadow-sm focus:outline-none">
          {children}
        </Combobox.Options>
      </Transition>
    </div>
  </Combobox>

// <Listbox {...props}>
//   <div className="relative mt-1">
//     <Listbox.Button className="group relative h-11 w-full cursor-pointer rounded-lg border border-gray bg-white pl-3 pr-10 text-left text-black focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-light disabled:text-gray">
//       {({ value }) =>
//         <>
//           <span className="block truncate">
//             {value ?
//               <span>{value?.name}</span>
//               :
//               <span className='text-gray-dark'>{placeholder}</span>

//             }
//           </span>
//           <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">

//             <ChevronUpDownIcon
//               className="h-6 w-6 text-primary group-disabled:text-gray-dark"
//               aria-hidden="true"
//             />
//           </span>
//         </>
//       }
//     </Listbox.Button>
//     <Transition
//       as={Fragment}
//       leave="transition ease-in duration-100"
//       leaveFrom="opacity-100"
//       leaveTo="opacity-0"
//     >
//       <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray bg-white py-1 text-base drop-shadow-sm focus:outline-none">
//         {children}
//       </Listbox.Options>
//     </Transition>
//   </div>
// </Listbox>

export { Autocomplete, Option };