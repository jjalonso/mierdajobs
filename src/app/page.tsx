'use client';
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { useCallback, useState } from "react";

import { Combobox, ComboboxItem } from "@/components/combobox";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const mockData = [{
  id: 1,
  name: 'Pepe Alonso Electricidad'
},
{
  id: 2,
  name: 'Pepe Mesa Elaborados'
},
]
const Page: React.FC = () => {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any | undefined>();

  console.log(selected, open)
  // OPTIONAL: close the combobox upon selection
  // setOpen(false);
  // }, []);

  const displayName = selected ? selected.title : 'Select product';

  return (
    <Combobox open={open}
      onChange={setSelected}
      onOpenChange={setOpen}
      value={selected}
      placeholder="Search...">
      {(field) => mockData.map((item) => (
        <ComboboxItem
          key={item.id}
        // onSelect={(currentValue) => {
        //   setSelected(currentValue === selected ? "" : currentValue)
        //   setOpen(false)
        // }}
        >
          xxx
        </ComboboxItem>
      ))}

    </Combobox>
  )
};

export default Page;
