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
    cursor-pointer 
    items-center 
    justify-center 
    gap-2
    rounded-md 
    uppercase 
    tracking-widest 
    transition
    duration-300
    focus-visible:outline-none
    disabled:cursor-not-allowed
    disabled:hover:brightness-100
    md:text-base
  `,
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-dark disabled:bg-gray",
        secondary: "bg-secondary text-white hover:bg-secondary-dark disabled:bg-gray",
        neutral: "bg-white text-black hover:brightness-90 disabled:bg-gray",
        ghost: "bg-transparent text-white disabled:bg-transparent disabled:opacity-50",
      },
      active: {
        true: "brightness-90",
      },
      size: {
        default: "min-w-[170px] px-4 py-3",
        fit: "min-w-fit px-4 py-3",
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
