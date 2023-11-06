
import { DivProps } from "react-html-props";
import { twMerge } from "tailwind-merge";

import ErrorMessage from "./error-message";

export interface Props extends DivProps {
  label?: string;
  className?: string,
  error?: string;
}

const FormField: React.FC<Props> = ({ children, error, label, className, ...props }) =>
  <div
    className={twMerge("flex flex-col", className)} {...props}>
    <div className="flex flex-col gap-4">
      <label className="flex flex-col gap-4">
        {label}
        {children}
      </label>
    </div>
    <ErrorMessage>
      {error && error}
    </ErrorMessage>
  </div>

export { FormField };