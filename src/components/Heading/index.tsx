import cls from "classnames";

import Props from "./props"

const sizeClassnames = {
    'small': 'text-xl',
    'medium': 'text-2xl',
    'large': 'text-3xl',
}

const Heading: React.FC<Props> = ({ children, level, size, className, ...props }) => {
    const Component = `h${level}` as any;
    return <Component {...props}
        className={cls(sizeClassnames[size], className)}> {children}</ Component>;
};

export default Heading;