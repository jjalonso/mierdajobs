import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Paper = ({ children, className }: Props) =>
  <div className={twMerge("rounded-md bg-white w-full p-6 shadow-md p-6 md:p-14", className)}>
    {children}
  </div>

export { Paper };