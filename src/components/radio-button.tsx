import { RadioGroup as HRadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

interface RadioGroupProps<T> {
  children: React.ReactNode
  value: T
  onChange: (value: T) => void
}

interface RadioGroupOptionProps<T> {
  value: T
  children: React.ReactNode
  className?: string
}

const RadioGroup = <T,>({ children, value, onChange }: RadioGroupProps<T>) =>
  <HRadioGroup
    className="flex w-fit flex-col gap-4"
    value={value}
    onChange={onChange}
  >
    {/* <RadioGroup.Label>Plan</RadioGroup.Label> */}
    {children}
  </HRadioGroup>

const RadioGroupOption = <T,>({ value, children, className }: RadioGroupOptionProps<T>) =>
  <HRadioGroup.Option
    value={value}
    className={twMerge(` 
      justify-between
      flex
      cursor-pointer 
      rounded-md
      border 
      border-gray-light 
      p-6 
      gap-x-8
      ui-checked:bg-primary
      ui-checked:text-white  
      ui-checked:border-primary
      ui-not-checked:bg-white 
      ui-not-checked:text-black"
      `, className)}
  >
    {children}

    <div className="flex w-fit items-center justify-center">
      <div className="rounded-full bg-secondary-light p-2 opacity-0 ui-checked:opacity-100">
        <CheckIcon className="h-6 w-6 text-primary-dark" />
      </div>
    </div>
  </HRadioGroup.Option>

export { RadioGroup, RadioGroupOption };
export type { RadioGroupProps, RadioGroupOptionProps }