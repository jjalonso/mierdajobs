import { Combobox, Transition } from "@headlessui/react"
import { ArrowPathIcon, CheckIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Children, Fragment } from "react";

import { IndexedName } from "@/app/api/types";

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

const Autocomplete = ({
  children,
  onQueryChange,
  disabled,
  placeholder,
  value,
  onChange,
  isLoading,
  nullable
}: AutocompleteProps) =>
  <Combobox
    disabled={disabled}
    onChange={onChange}
    value={value}
    by="id"
    // Compliance with original types
    nullable={nullable as false | undefined}
  >
    <div className="relative mt-1">
      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        {isLoading ?
          <ArrowPathIcon className="z-10 h-5 w-5 animate-spin text-gray-dark" /> :
          <MagnifyingGlassIcon className={`z-10 h-5 w-5 ${disabled ? "text-gray " : "text-primary"}`} />
        }
      </span>
      <div className={`
        border: 
        relative 
        h-14
        w-full 
        cursor-default 
        overflow-hidden 
        rounded-md 
        border 
        border-gray-light 
        bg-white
        text-left
        focus:outline-none 
        ${disabled && "border-gray-tint"}
      `}>
        <Combobox.Input
          onFocus={(e) => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
          className="
            h-full 
            w-full 
            truncate 
            border-none 
            py-2 
            pl-12
            placeholder:text-gray-dark 
            focus:outline-none 
            disabled:cursor-not-allowed
            disabled:bg-gray-tint
            disabled:text-gray
          "
          placeholder={placeholder}
          autoComplete={"off"}
          onChange={(e) => onQueryChange?.(e.currentTarget.value)}
          displayValue={(value: IndexedName) => value?.name}
        />
      </div>
      <Transition
        show={Children.count(children) > 0 && !isLoading}
        as={Fragment}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Combobox.Options className="
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
          {children}
          {/* {isLoading ?
            <>
              <ArrowPathIcon className="h-5 w-5 animate-spin text-gray" />
              <p className="text-sm text-gray">Buscando negocios...</p>
            </> : null} */}
        </Combobox.Options>
      </Transition>
    </div>
  </Combobox >

const AutocompleteOption = ({ children, value, noCheckIcon = false }: AutocompleteOptionProps) =>
  <Combobox.Option
    value={value}
    className={`
    relative
    flex
    cursor-pointer
    select-none
    flex-row
    px-2
    py-4
    ui-selected:text-primary-dark
    ui-active:bg-primary-tint
    ui-active:text-primary-dark
    ${noCheckIcon ? "" : "pl-11"}
    `}>
    {!noCheckIcon && (
      <span className="
      absolute
      inset-y-0
      left-0
      flex
      items-center
      pl-3
      text-primary
    ">
        <CheckIcon className="
          hidden
          h-5 
          w-5 ui-selected:block"
        />
      </span>
    )}
    {children}
  </Combobox.Option>

export { Autocomplete, AutocompleteOption };