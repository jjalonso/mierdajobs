import { Combobox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';

import Props from './props';

const Option = ({ value }: Props) => {
  return (
    <Combobox.Option
      value={value}
      className='
        relative
        flex
        cursor-pointer 
        select-none 
        flex-row 
        p-2
        ui-selected:text-primary
        ui-active:bg-primary-light
        ui-active:text-primary'
    >
      {value.name}
    </Combobox.Option >
    // <>
    //   <Listbox.Option
    //     className='
    //       relative
    //       flex
    //       cursor-pointer 
    //       select-none 
    //       flex-row 
    //       p-2
    //       pl-11
    //       ui-selected:text-primary
    //       ui-active:bg-primary-light
    //       ui-active:text-primary
    //     '
    //     value={value}
    //   >
    //     <span className='
    //       absolute 
    //       inset-y-0 
    //       left-0 
    //       flex 
    //       items-center 
    //       pl-3 
    //       text-primary
    //     '>
    //       <CheckIcon className='
    //         hidden 
    //         h-6 
    //         w-6 
    //         ui-selected:block
    //       '/>
    //     </span>
    //     {value.name}
    //   </Listbox.Option>
    // </>
  );
};

export default Option