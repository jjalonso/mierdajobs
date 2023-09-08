import Props from "./Button.props"
import classNames from "classnames";

const GhostButton: React.FC<Props> = ({ children, active }) => 
<button className={classNames(
    "btn btn-ghost text-white gap-7",
    {'btn-active': active})}>
    {children}
</button>

export {GhostButton};