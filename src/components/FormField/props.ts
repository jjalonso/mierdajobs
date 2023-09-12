import { ComponentPropsWithRef } from "react";

export default interface Props extends ComponentPropsWithRef<'div'> {
    // children: React.ReactNode;
    label?: string;
    error?: Record<string, { message: string }>;
}