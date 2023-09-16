import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Fragment, } from 'react';

import { ValueType } from './Option/props';

interface AutocompleteProps {
  children: React.ReactNode,
  onQueryChange?: (query: string) => void,
  placeholder?: string,
  disabled?: boolean,
};

interface AutocompleteOptionProps {
  children: React.ReactNode,
  value: any
};

const Autocomplete: React.FC<AutocompleteProps> = ({ children, onQueryChange, disabled, placeholder }) =>
  <Combobox disabled={disabled}>
    <div className="relative mt-1">
      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon className={`z-10 h-6 w-6 ${disabled ? 'text-gray-dark' : 'text-primary'}`} />
      </span>

      <div className="relative h-11 w-full cursor-default overflow-hidden rounded-md border border-gray-light bg-white text-left focus:outline-none">
        <Combobox.Input
          onFocus={(e) => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
          className="h-full w-full border-none py-2 pl-11 placeholder:text-gray-dark focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-light disabled:text-gray"
          placeholder={placeholder}
          autoComplete={'off'}
          onChange={(e) => onQueryChange?.(e.currentTarget.value)}
          displayValue={(value: ValueType) => value?.name}
        />
        {/* Hack: Button is on top of the text to force popup opening */}
        <div className="absolute top-0 w-full">
          <Combobox.Button className="h-11 w-full" />
        </div>

      </div>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Combobox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-light bg-white py-1 drop-shadow-sm focus:outline-none">
          {children}
        </Combobox.Options>
      </Transition>
    </div>
  </Combobox>

const AutocompleteOption: React.FC<AutocompleteOptionProps> = ({ children, value }) =>
  <Combobox.Option
    className='
          relative
          flex
          cursor-pointer 
          select-none 
          flex-row 
          p-2
          pl-11
          ui-selected:text-primary-dark
          ui-active:bg-primary-tint
          ui-active:text-primary-dark
        '
    value={value}
  >
    <span className='
          absolute 
          inset-y-0 
          left-0 
          flex 
          items-center 
          pl-3 
          text-primary
        '>
      <CheckIcon className='
            hidden 
            h-6 
            w-6 
            ui-selected:block
          '/>
    </span>
    {children}
  </Combobox.Option>

export { Autocomplete, AutocompleteOption };