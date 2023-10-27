import clsx from "clsx";
import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  current: number;
  max: number;
  className?: string;
}

const CharCounter = ({ current = 0, max, className }: Props) => {
  const isExceeded = useMemo(() => current > max, [current, max]);

  return (
    <span className={
      twMerge(clsx({ "text-error": isExceeded }, "p-2 text-sm", className))}
    >{current}/{max}</span>
  );
};

export default CharCounter;
