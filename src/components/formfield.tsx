
import { ReactNode } from "react";
import { ControllerRenderProps, RegisterOptions, useController } from "react-hook-form";
import { DivProps } from "react-html-props";
import { twMerge } from "tailwind-merge";

export interface Props extends Omit<DivProps, "children"> {
  label?: string;
  name: string;
  rules?: RegisterOptions;
  disabled?: boolean;
  children: (field: ControllerRenderProps & { id: string }) => ReactNode;
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
      <div className="flex h-9 w-fit items-center text-sm text-error">
        {fieldError && fieldError.message}
      </div>
    </div>

  )
}

export { FormField };