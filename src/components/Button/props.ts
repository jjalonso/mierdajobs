import { ComponentPropsWithRef } from "react";

export default interface Props extends ComponentPropsWithRef<'button'> {
    active?: boolean;
}