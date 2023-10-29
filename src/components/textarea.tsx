import { TextAreaProps } from "react-html-props";
import { twMerge } from "tailwind-merge";

const TextArea = ({ className, ...props }: TextAreaProps) =>
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
      focus:border-primary
      focus:ring-primary
      disabled:cursor-not-allowed
      disabled:border-gray-tint
      disabled:bg-gray-tint
      disabled:text-gray
      disabled:opacity-50
      `, className)}
  />

export { TextArea };