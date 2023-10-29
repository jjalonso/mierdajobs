import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  value: string;
  className?: string;
}

const ValueBlock = ({ title, value, className }: Props) => {
  return (
    <div className={twMerge("flex-col", className)}>
      <p className="font-semibold">{title}</p>
      <p className="text-gray">{value}</p>
    </div>
  );
};

export default ValueBlock;