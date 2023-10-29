import React from "react";

interface Props {
  children: React.ReactNode;
}

const ErrorMessage = ({ children }: Props) => (
  <div className="flex h-9 w-fit items-center text-sm text-error">
    {children}
  </div>
);

export default ErrorMessage;
