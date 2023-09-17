import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  "inline-flex w-fit  min-w-[180px] items-center justify-center gap-4 rounded-md font-medium uppercase transition-colors duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary-light",
      },
      active: {
        true: 'bg-primary-light',
      },
      size: {
        default: "h-11 px-4 py-2",
        icon: "h-10 w-10",
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
}

const Button: React.FC<ButtonProps> =
  ({ className, variant, size, active, ...props }) =>
    <button
      className={twMerge(buttonVariants({ variant, size, className, active }))}
      {...props}
    />

export { Button, buttonVariants }
