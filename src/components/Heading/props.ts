import { ComponentPropsWithRef } from "react";

export default interface Props extends ComponentPropsWithRef<'h1'> {
    children: React.ReactNode;
    level: 1 | 2 | 3;
    size: 'small' | 'medium' | 'large';
}