import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { ReactNode, cloneElement, useMemo, useState } from "react";

import { Button } from "./ui/button";
import { Command, CommandEmpty, CommandInput, CommandItem } from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export interface ValueType {
  id: string,
  name: string
}

export interface ComboboxItemProps {
  onSelect: (value: ValueType) => void;
};

export interface ComboboxProps {
  children: (props: ComboboxItemProps) => ReactNode;
  open: boolean;
  placeholder?: string;
  onOpenChange: (open: boolean) => void;
  onChange: (value: ValueType) => void;
  value: { id: string, name: string };
};

const Combobox: React.FC<ComboboxProps> = ({ children, open, onChange, value, placeholder, onOpenChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const itemProps = { onSelect: (v: ValueType) => onChange(v) };

  return (
    <Popover open={open}
      onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
        >
          {value?.name || placeholder}

          <ChevronUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent side="bottom"
        className='w-80 p-0'>
        <Command>
          <CommandInput
            value={searchQuery}
            onValueChange={setSearchQuery}
            placeholder={placeholder} />
          <CommandEmpty>No framework found.</CommandEmpty>
          {children(itemProps)}
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { Combobox, CommandItem as ComboboxItem };