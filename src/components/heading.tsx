import { VariantProps, cva } from "class-variance-authority";
import { Roboto } from "next/font/google";
import React, { createElement } from "react";
import { twMerge } from "tailwind-merge";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const headingVariants = cva([`${roboto.className} font-normal`], {
  variants: {
    size: {
      xs: ["text-xl "],
      base: ["text-2xl"],
      xl: ["text-3xl md:leading-relaxed"]
    },
  },
  defaultVariants: {
    size: "base",
  },
});

export interface Props
  extends React.ButtonHTMLAttributes<HTMLHeadingElement>,
  VariantProps<typeof headingVariants> {
  level: 1 | 2 | 3;
}

const Heading: React.FC<Props> = ({ className, children, level, size }) => {
  const Component = `h${level}`;
  return createElement(Component, { className: twMerge(headingVariants({ size }), className) }, children);
};

export { Heading };