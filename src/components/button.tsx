import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { cva, type VariantProps } from "class-variance-authority";
import { Roboto } from "next/font/google";
import React from "react";
import { twMerge } from "tailwind-merge";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const buttonVariants = cva(`
    ${roboto.className} 
    inline-flex
    w-fit 
    min-w-[180px] 
    items-center 
    justify-center 
    gap-4 
    rounded-md 
    font-medium 
    uppercase 
    tracking-widest 
    transition
    duration-300 
    focus-visible:outline-none 
    disabled:cursor-not-allowed
    disabled:bg-gray
  `,
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary-light",
      },
      active: {
        true: "bg-primary-light",
      },
      size: {
        default: "h-14 px-4 py-2",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = ({
  className,
  variant,
  size,
  active,
  loading,
  disabled,
  children,
  ...props
}: ButtonProps) =>
  <button
    disabled={disabled || loading}
    className={twMerge(buttonVariants({ variant, size, className, active }))}
    {...props}
  >
    {loading ?
      <>
        <ArrowPathIcon className="z-10 h-5 w-5 animate-spin" />
        <div>Espere...</div>
      </> :
      children
    }

  </button>

export { Button, buttonVariants }
