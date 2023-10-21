import clsx from "clsx";
import React from "react";
import { InputProps } from "react-html-props";
import { twMerge } from "tailwind-merge";

interface Props extends InputProps {
  icon?: React.ReactNode;
  suffix?: React.ReactNode;
};

const Input = ({ icon, className, suffix, ...props }: Props) =>
  <div className="relative flex w-full">
    {icon && <div className="pointer-events-none absolute inset-y-0 z-10 flex items-center pl-4 text-primary">
      <div className="h-7 w-7">
        {icon}
      </div>
    </div>}
    <input
      {...props}
      // BUG: NOT WORKING, NOT REMOVING CLASSES FROM CLASSNAME
      className={twMerge(` 
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
        clsx({ "pl-14": icon, "rounded-r-none": suffix }),
        className
      )} />
    {suffix ? <div className="-mr-px flex">
      <span className="flex items-center rounded rounded-l-none border border-l-0 border-gray-light bg-gray-tint px-3 text-gray">{suffix}</span>
    </div> : null}

  </div>

export { Input };
