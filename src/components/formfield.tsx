
import { ComponentPropsWithRef, ComponentPropsWithoutRef, ReactElement, ReactNode, cloneElement } from "react";
import { Control, ControllerRenderProps, FieldValues, RegisterOptions, useController } from "react-hook-form";
import { DivProps } from "react-html-props";

interface Props extends Omit<DivProps, 'children'> {
  label?: string;
  name: string;
  control?: Control<any>;
  rules?: RegisterOptions;
  disabled?: boolean;
  children: (field: ControllerRenderProps<FieldValues, string>) => ReactNode;
}

// name, control, rules
const FormField: React.FC<Props> = ({ children, label, name, control, rules, className, disabled }) => {
  const {
    field,
    fieldState: { error: fieldError },
  } = useController({
    disabled,
    name,
    control,
    rules,
  });
  return (
    <div className={className}>
      <label>
        {label}
        {children(field)}
      </label>
      {fieldError && <p className="text-sm">
        {fieldError.message}
      </p>}
    </div>
  )
}

export default FormField;