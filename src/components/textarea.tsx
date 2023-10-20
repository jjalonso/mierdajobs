import { TextAreaProps } from "react-html-props";
import { twMerge } from "tailwind-merge";

interface Props extends TextAreaProps {
  maxLengthCounter?: number
  value?: string
}

const TextArea = ({ className, maxLengthCounter = 0, ...props }: Props) =>
  <div>
    <textarea
      {...props}
      className={twMerge(`
      relative
      h-48
      w-full
      resize-none 
      overflow-hidden 
      rounded-md 
      border 
      border-gray-light
      bg-white
      px-3
      py-2
      text-left
      placeholder:text-gray
      focus:border-secondary
      focus:ring-secondary
      disabled:cursor-not-allowed
      disabled:border-gray-tint
      disabled:bg-gray-tint
      disabled:text-gray
      disabled:opacity-50
      `, className)}
    />
    {maxLengthCounter ? `${props.value?.length}/{maxLength}` : null}
  </div>

export { TextArea };