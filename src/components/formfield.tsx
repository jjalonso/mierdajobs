
import { ReactNode } from "react";
import { ControllerRenderProps, RegisterOptions, useController } from "react-hook-form";
import { DivProps } from "react-html-props";
import { twMerge } from "tailwind-merge";

import ErrorMessage from "./error-message";

export interface Props extends Omit<DivProps, "children"> {
  label?: string;
  name: string;
  rules?: RegisterOptions;
  disabled?: boolean;
  children: (field: ControllerRenderProps & { id: string }) => ReactNode;
  asNumber?: boolean;
}

const FormField: React.FC<Props> = ({ children, label, className, name, rules, disabled }) => {
  const {
    field,
    fieldState: { error: fieldError },
  } = useController({
    disabled,
    name,
    rules,
  });

  return (
    <div className={twMerge("flex flex-col", className)}>
      <div className="flex flex-col gap-4">
        <label htmlFor={name}>
          {label}
        </label>
        {children({ id: name, ...field })}
      </div>
      <ErrorMessage>
        {fieldError && fieldError.message}
      </ErrorMessage>
    </div>

  )
}

export { FormField };