import { ListboxProps } from "@headlessui/react";

import { ValueType } from "./SelectOption/props";

type Props = ListboxProps<'div', ValueType, ValueType> & { children: React.ReactNode };
export default Props

