import { InputProps } from "react-html-props"

const Checkbox = (props: InputProps) =>
  <input
    {...props}
    type="checkbox"
    className="
      h-6
      w-6 
      cursor-pointer 
      rounded 
      border 
      border-gray-light
      bg-white
      text-error
      focus:outline-offset-1
      focus:outline-white
      focus:ring-0
      "
  />

export { Checkbox }
