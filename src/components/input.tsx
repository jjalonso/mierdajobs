import clsx from "clsx";
import React from "react";
import { InputProps } from "react-html-props";
import { twMerge } from "tailwind-merge";

interface Props extends InputProps {
  icon?: React.ReactNode;
};

const Input = ({ icon, className, ...props }: Props) =>
  <div className="relative flex w-full">
    {icon && <div className="pointer-events-none absolute inset-y-0 z-10 flex items-center pl-4 text-primary">
      <div className="h-7 w-7">
        {icon}
      </div>
    </div>}
    <input
      {...props}
      className={twMerge(clsx(`
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
        placeholder:text-gray
        focus:border-secondary
        focus:ring-secondary
        disabled:cursor-not-allowed
        disabled:border-none
        disabled:bg-gray-light
        disabled:text-gray
        disabled:opacity-50
        `,
        { "pl-14": icon }),
        className
      )} />

  </div>

export { Input };
