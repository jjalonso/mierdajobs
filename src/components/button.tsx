import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { cva, type VariantProps } from "class-variance-authority";
import { Roboto } from "next/font/google";
import React from "react";
import { ButtonProps as ButtonPropsType } from "react-html-props";
import { twMerge } from "tailwind-merge";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const buttonVariants = cva(`
    ${roboto.className} 
    flex
    w-fit 
    items-center 
    justify-center 
    gap-4 
    rounded-md 
    uppercase 
    tracking-widest 
    transition 
    duration-300
    focus-visible:outline-none
    disabled:cursor-not-allowed
    disabled:bg-gray
    md:text-base
  `,
  {
    variants: {
      variant: {
        primary: "bg-primary text-white shadow-sm hover:brightness-110",
        secondary: "bg-secondary text-white shadow-sm hover:brightness-125",
        ghost: "bg-transparent text-white",
      },
      active: {
        // TODO: Active look bad on others that are not primary
        // This requires research on how to make it with CVA
        true: "brightness-110",
      },
      size: {
        default: "min-w-[170px] px-4 py-3",
        icon: "h-fit w-fit",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps extends
  ButtonPropsType,
  VariantProps<typeof buttonVariants> {
  loading?: boolean
  className?: string
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
    className={twMerge(buttonVariants({ variant, size, active }), className)}
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
