import Props from "./props"

const FormField: React.FC<Props> = ({ children, label, error, ...props }) =>
    <div
        {...props}>
        <label className="flex flex-col gap-2">
            {label}
            {children}
        </label>
        {error && <p className="text-sm italic">
            {/* {error.message} */}
        </p>}
    </div>
export default FormField;