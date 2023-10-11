import { Combobox, Transition } from "@headlessui/react"
import { ArrowPathIcon, CheckIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Children, Fragment } from "react";
import { InputProps } from "react-html-props";

interface AutocompleteProps<T> extends Omit<InputProps, "value" | "onChange"> {
  children: React.ReactNode
  placeholder?: string
  disabled?: boolean
  value?: T
  isLoading?: boolean
  nullable?: boolean
  by?: string
  displayValue?: (value: T) => string
  onQueryChange?: (query: string) => void
  onChange?: (v: T) => void
};

interface AutocompleteOptionProps<T> {
  children: React.ReactNode,
  value: T,
  noCheckIcon?: boolean
};

const Autocomplete = <T,>({
  children,
  disabled,
  placeholder,
  value,
  onChange,
  isLoading,
  onQueryChange,
  displayValue = (v) => String(v),
  by = "id",
  ...props
}: AutocompleteProps<T>) => {
  return (
    <Combobox
      disabled={disabled}
      onChange={onChange}
      value={value}
      by={by}
    >
      {({ open }) => (
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
              {...props}
              autoComplete={"off"}
              className="
                h-full 
                w-full 
                truncate 
                border-none
                bg-transparent 
                py-2 
                pl-12
                placeholder:text-gray 
                focus:outline-none 
                disabled:cursor-not-allowed
                disabled:bg-gray-tint
                disabled:text-gray"
              placeholder={placeholder}
              displayValue={displayValue}
              // onFocus={(e) => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
              onChange={(e) => onQueryChange?.(e.currentTarget.value)}
            />
          </div>
          <Transition
            as={Fragment}
            show={open && Children.count(children) > 0}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options
              static
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
              {children}
            </Combobox.Options>
          </Transition>
        </div>
      )}
    </Combobox >
  )
}

const AutocompleteOption = <T,>({ children, value, noCheckIcon = false }: AutocompleteOptionProps<T>) =>
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