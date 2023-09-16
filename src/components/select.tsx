import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

interface SelectProps {
  children: React.ReactNode;
  placeholder?: string;
  defaultValue?: any;
  value?: any;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

interface SelectOptionProps {
  children: React.ReactNode;
  value: any;
}

const Select: React.FC<SelectProps> = ({ children, value, disabled, placeholder, onChange }) =>
  <Listbox
    disabled={disabled}
    value={value}
    onChange={onChange}
  >
    <div className="relative mt-1">
      <Listbox.Button className="group relative h-11 w-full cursor-pointer rounded-md border border-gray-light bg-white pl-3 pr-10 text-left text-black focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-light disabled:text-gray">
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
        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-light bg-white py-1 text-base drop-shadow-sm focus:outline-none">
          {children}
        </Listbox.Options>
      </Transition>
    </div>
  </Listbox>

const SelectOption: React.FC<SelectOptionProps> = ({ children, value }) =>
  <Listbox.Option
    value={value}
    className='
      relative
      flex
      cursor-pointer 
      select-none 
      flex-row 
      p-2
      ui-selected:text-primary-dark
      ui-active:bg-primary-tint
      ui-active:text-primary-dark'
  >
    {children}
  </Listbox.Option>

export { Select, SelectOption };