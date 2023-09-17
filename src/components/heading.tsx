// import cls from "classnames";
// import { ComponentPropsWithRef } from "react";

import { cva } from "class-variance-authority";

const button = cva([""], {
  variants: {
    size: {
      xs: ["text-xl"],
      base: ["text-2xl"],
      xl: ["text-3xl"]
    },
  },
  // compoundVariants: [
  //   {
  //     intent: "primary",
  //     size: "medium",
  //     class: "uppercase",
  //     // **or** if you're a React.js user, `className` may feel more consistent:
  //     // className: "uppercase"
  //   },
  // ],
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

// // const Heading: React.FC<Props> = ({ children, level, ...props }) => {
// //     const Component = `h${level}` as any;
// //     return <Component className={button(props)}> {children}</Component>;
// // };

// export default Heading;