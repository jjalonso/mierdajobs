// import cls from "classnames";
// import { ComponentPropsWithRef } from "react";

import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const headingVariants = cva(["font-bold"], {
  variants: {
    size: {
      xs: ["text-xl"],
      base: ["text-2xl"],
      xl: ["text-3xl"]
    },
  },
  defaultVariants: {
    size: "base",
  },
});

// interface Props {
//     children: React.ReactNode;
//     level: 1 | 2 | 3;
// }

// const style = ['px-2 py-2', {
//     variants: {
//         size: {
//             xs: 'text-xl',
//             base: 'text-2xl',
//             xl: 'text-3xl',
//         },
//     },
// }]

// const Heading = w.[`h${level}`](style);

// const button = wx({
//     variants: {
//         size: {
//             xs: 'text-xl',
//             base: 'text-2xl',
//             xl: 'text-3xl',
//         },
//     },
//     defaultVariants: {
//         size: 'base',
//     },
// });

export interface Props
  extends React.ButtonHTMLAttributes<HTMLHeadingElement>,
  VariantProps<typeof headingVariants> {
  level: 1 | 2 | 3;
}

const Heading: React.FC<Props> = ({ children, level, size }) => {
  const Component: keyof JSX.IntrinsicElements = `h${level}` as any;
  return <Component className={twMerge(headingVariants({ size }))}> {children}</Component>;

};

export default Heading;