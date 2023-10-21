import { InputProps } from "react-html-props"

interface Props extends InputProps {
  children: React.ReactNode
}

const Checkbox = ({ children, ...props }: Props) =>
  <label className="flex w-fit cursor-pointer items-center gap-3 py-2">
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
      text-secondary
      focus:outline-offset-1
      focus:outline-white
      focus:ring-0
      "
    />
    <div>
      {children}
    </div>
  </label>

export { Checkbox }
