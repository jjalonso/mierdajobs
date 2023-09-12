import { ReactNode } from "react";

export interface ValueType { id: string, name: string };

export default interface SelectOptionProps { value: ValueType };