import { Label } from "../ui/label";

import Props from "./props"

const FormField: React.FC<Props> = ({ children, label, error, className }) =>
  <div className={className}>
    <Label>
      {label}
      {children}
    </Label>
    {error && <p className="text-sm italic">
      {/* {error.message} */}
    </p>}
  </div>
export default FormField;