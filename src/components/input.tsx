import { InputProps } from "react-html-props";

const Input = (props: InputProps) =>
  <input
    {...props}
    className="
      relative
      h-14
      w-full 
      overflow-hidden 
      rounded-md 
      border 
      border-gray-light 
      bg-white 
      px-3
      py-2
      text-left
      placeholder:text-gray-dark
      focus:border-gray-light
      focus:outline-none
      focus:ring-0
      disabled:cursor-not-allowed
      disabled:border-none
      disabled:bg-gray-light
      disabled:text-gray
      disabled:opacity-50 
    "/>

export { Input };