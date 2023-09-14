import { ComboboxProps } from "@headlessui/react";
import { ComponentPropsWithRef, SyntheticEvent } from "react";

import { ValueType } from "./Option/props";

interface Props {
  children: React.ReactNode,
  onQueryChange?: (query: string) => void,
  placeholder?: string,
  disabled?: boolean,
};

export default Props

