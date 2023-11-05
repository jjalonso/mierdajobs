import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

interface SelectProps<T> {
  children: React.ReactNode;
  placeholder?: string;
  defaultValue?: T;
  value?: T;
  disabled?: boolean;
  by?: string;
  name?: string;
  onChange?: (value: T) => void;
}

interface SelectOptionProps<T> {
  children: React.ReactNode;
  value: T;
}

const Select = <T,>({ children, placeholder, by = "id", ...props }: SelectProps<T>) =>
  <Listbox
    {...props}
    by={by as never}
  >
    <div className="relative">
      <Listbox.Button className="
        group 
        relative 
        h-14 
        w-full 
        cursor-pointer 
        rounded-md 
        border
        border-gray-light 
        bg-white 
        px-3
        py-2
        text-left
        placeholder:text-gray-dark
        focus:outline-none 
        disabled:cursor-not-allowed
        disabled:border-gray-tint
        disabled:text-gray"
      >
        {({ value }) =>
          <>
            <span className="block truncate">
              {value ?
                <span>{value.name}</span>
                :
                <span className="text-gray-dark">{placeholder}</span>
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
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="
          absolute 
          z-10 
          mt-1 
          max-h-60 
          w-full 
          overflow-auto 
          rounded-md 
          border 
          border-gray-light 
          bg-white 
          py-1 
          text-base 
          drop-shadow-sm 
          focus:outline-none
        ">
          {children}
        </Listbox.Options>
      </Transition>
    </div>
  </Listbox >

const SelectOption = <T,>({ children, value }: SelectOptionProps<T>) =>
  <Listbox.Option
    value={value}
    className="
      relative
      flex
      cursor-pointer 
      select-none 
      flex-row 
      px-2
      py-4
      ui-selected:text-primary
      ui-active:text-primary"
  >
    {children}
  </Listbox.Option>

export { Select, SelectOption };