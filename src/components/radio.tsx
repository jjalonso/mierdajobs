import { DivProps, InputProps } from "react-html-props"
import { twMerge } from "tailwind-merge"

const RadioGroup: React.FC<DivProps> = ({ className, children, ...props }) =>
  <div
    role="radiogroup"
    className={twMerge("w-fit flex flex-col justify-center gap-1", className)}
    {...props}
  >
    {children}
  </div >

interface RadioProps extends InputProps {
  label: string
}

const Radio = ({ label, ...props }: RadioProps) =>
  <label className="flex w-fit cursor-pointer items-center gap-3 py-2">
    <input
      {...props}
      type="radio"
      className="
        h-6 
        w-6
        cursor-pointer
        appearance-none 
        rounded-full 
        border-gray-light 
        text-error 
        focus:outline-offset-1
        focus:outline-white
        focus:ring-0"
    />
    {label}
  </label>

export { RadioGroup, Radio }