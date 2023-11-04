import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ErrorMessage = ({ children, className }: Props) => (
  <div className={twMerge("flex h-9 w-fit items-center text-sm text-error", className)}>
    {children}
  </div>
);

export default ErrorMessage;
