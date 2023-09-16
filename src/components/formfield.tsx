
import { ComponentPropsWithRef } from "react";

interface Props extends ComponentPropsWithRef<'div'> {
  label?: string;
  error?: Record<string, { message: string }>;
}

const FormField: React.FC<Props> = ({ children, label, error, className }) =>
  <div className={className}>
    <label>
      {label}
      {children}
    </label>
    {error && <p className="text-sm italic">
      {/* {error.message} */}
    </p>}
  </div>
export default FormField;