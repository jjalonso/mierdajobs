import { Combobox, Transition } from '@headlessui/react'
import { ArrowPathIcon, CheckIcon, FaceFrownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Children, Fragment, forwardRef } from 'react';

import { IndexedName } from '@/app/api/types';

interface AutocompleteProps {
  children: React.ReactNode
  placeholder?: string
  disabled?: boolean
  value?: IndexedName
  isLoading?: boolean
  nullable?: boolean
  onQueryChange?: (query: string) => void
  onChange?: (v: IndexedName) => void
};

interface AutocompleteOptionProps {
  children: React.ReactNode,
  value: IndexedName
  noCheckIcon?: boolean
};

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(({
  children,
  onQueryChange,
  disabled,
  placeholder,
  value,
  onChange,
  isLoading,
  nullable
}, ref) => (
  <Combobox
    ref={ref}
    disabled={disabled}
    onChange={onChange}
    value={value}
    by="id"
    // Compliance with original types
    nullable={nullable as false | undefined}
  >
    <div className="relative mt-1">
      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {isLoading ?
          <ArrowPathIcon className="z-10 h-5 w-5 animate-spin text-gray-dark" /> :
          <MagnifyingGlassIcon className={`z-10 h-5 w-5 ${disabled ? 'text-gray ' : 'text-primary'}`} />
        }
      </span>
      <div className="
        relative h-11 
        w-full 
        cursor-default 
        overflow-hidden 
        rounded-md 
        border 
        border-gray-light
        bg-white 
        text-left 
        focus:outline-none"
      >
        <Combobox.Input
          onFocus={(e) => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
          className="
            h-full 
            w-full 
            border-none 
            py-2 
            pl-11 
            placeholder:text-gray-dark 
            focus:outline-none 
            disabled:bg-gray-light 
            disabled:text-gray
            disabled:opacity-50"
          placeholder={placeholder}
          autoComplete={'off'}
          onChange={(e) => onQueryChange?.(e.currentTarget.value)}
          displayValue={(value: IndexedName) => value?.name}
        />
        {/* Hack: Button is on top of the text to force popup opening */}
        <div className="absolute top-0 w-full">
          <Combobox.Button className="h-11 w-full disabled:cursor-not-allowed" />
        </div>
      </div>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Combobox.Options
          className="
          absolute
          z-20
          mt-1
          max-h-60
          w-full
          overflow-auto
          rounded-md
          border
          border-gray-light
          bg-white
          py-1
          drop-shadow-sm
          focus:outline-none
        ">
          {Children.count(children) > 0 && !isLoading ? children :
            <div className="flex flex-col items-center gap-2 p-3">
              {isLoading ?
                <>
                  <ArrowPathIcon className="h-5 w-5 animate-spin text-gray" />
                  <p className="text-sm text-gray">Buscando negocios...</p>

                </>
                :
                <>
                  <FaceFrownIcon className="h-5 w-5 text-gray" />
                  <p className="text-sm text-gray">No se encontraron resultados</p>
                </>
              }
            </div>}
        </Combobox.Options>
      </Transition>
    </div>
  </Combobox >
));

Autocomplete.displayName = 'Autocomplete';

const AutocompleteOption = forwardRef<HTMLLIElement, AutocompleteOptionProps>(({ children, value, noCheckIcon = false }, ref) =>
  <Combobox.Option
    ref={ref}
    value={value}
    className={`
    relative
    flex
    cursor-pointer
    select-none
    flex-row
    p-2
    ui-selected:text-primary-dark
    ui-active:bg-primary-tint
    ui-active:text-primary-dark
    ${noCheckIcon ? '' : 'pl-11'}
    `}>
    {!noCheckIcon && (
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
        h-5 
        w-5 ui-selected:block'
        />
      </span>
    )}
    {children}
  </Combobox.Option>
);

AutocompleteOption.displayName = 'AutocompleteOption';

export { Autocomplete, AutocompleteOption };