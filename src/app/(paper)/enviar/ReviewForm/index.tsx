'use client';

import { CheckIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Label } from "@radix-ui/react-label";
import React, { useCallback } from "react"
import { useForm, useWatch } from "react-hook-form";
import useSWR from 'swr';
import { useDebounce } from "usehooks-ts";

import Props from "./props";

import { CityResponse } from "@/app/api/counties/type";
import { Autocomplete, Option } from "@/components/Autocomplete_HEADLESS";
// import { Select, SelectOption } from "@/components/Select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const fetcher = (url: URL) => fetch(url).then((res) => res.json());

const ReviewForm: React.FC<Props> = ({ counties }) => {
  const form = useForm();
  const countyValue = useWatch({ control: form.control, name: 'county' });

  const { data: cities, error, isLoading } = useSWR(
    countyValue ?
      `${process.env.NEXT_PUBLIC_URL}/api/cities?county=${countyValue}` : null,
    fetcher
  );

  const onSubmit = useCallback((data: any) => console.log('Submit', data), []);

  return (
    <Form {...form}>
      <form className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col gap-6 md:flex-row">

          {/*  COUNTY */}

          <div className="w-full md:w-1/4">
            <FormField
              control={form.control}
              name="county"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Provincia</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}
                      value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione..." />
                      </SelectTrigger>
                      <SelectContent>
                        {counties.map((county) =>
                          <SelectItem key={county.id}
                            value={county.id}>{county.name}
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
          </div>

          {/*  CITY */}

          <div className="w-full md:w-2/4">
            {/* <Label htmlFor="county">Provincia</Label> */}
            <FormField
              control={form.control}
              name="city"
              render={() => (
                <FormItem>
                  <FormLabel>Localidad</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione..." />
                      </SelectTrigger>
                      <SelectContent>
                        {cities?.map((city: CityResponse) =>
                          <SelectItem key={city.id}
                            value={city.id}>{city.name}</SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>

              )} />
          </div>

        </div>

        {/*  BUSINESS */}

        <div className="flex w-full flex-col md:w-2/4">

          {/* <div className="relative">
            <MagnifyingGlassIcon className='absolute m-2.5 h-6 w-6 text-gray' />
            <Input className="pl-10"
              placeholder="Escribe el nombre de la empresa" />
          </div>

          <Card className="divide-y divide-gray-light">
            <div className="flex gap-4 overflow-hidden p-2">
              <span className="min-w-fit">Pepe Alonso Electricidad</span>
              <address className="w-max truncate text-sm font-normal not-italic text-gray">Avenida Rafael Alberti</address>
            </div>
            <div className="flex gap-4 overflow-hidden p-2">
              <span className="min-w-fit">Pepe Mesa</span>
              <address className="w-max truncate text-sm font-normal not-italic text-gray">Calle palacios, 1</address>
            </div>
            <div className="flex gap-4 overflow-hidden p-2">
              <span className="min-w-fit">Pepe Almorranas</span>
              <address className="w-max truncate text-sm font-normal not-italic text-gray">Calle Menesteo S/N</address>
            </div>
          </Card> */}
        </div>

        <Button className="self-end"
          type="submit">Continuar</Button>
      </form>
    </Form >
  )
}

export default ReviewForm
//   <FormField
//     className="w-full md:w-2/4"
//     label="Localidad"
//   // error={errors.county}
//   >
//     <Select disabled
//       <SelectTrigger>
//         <SelectValue placeholder="Seleccione..." />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectItem value="apple">Apple</SelectItem>
//         <SelectItem value="banana">Banana</SelectItem>
//         <SelectItem value="blueberry">Blueberry</SelectItem>
//         <SelectItem value="grapes">Grapes</SelectItem>
//         <SelectItem value="pineapple">Pineapple</SelectItem>
//       </SelectContent>
//     </Select>
//   </FormField>
// </div>
// <div className="flex w-full flex-col gap-1 md:w-2/4">

{/*  BUSINESS */ }

// <FormField
//   label="Lugar de trabajo"
// // error={errors.county}
// >
//   <div className="relative">
//     <MagnifyingGlassIcon className='absolute m-2.5 h-6 w-6 text-gray' />
//     <Input className="pl-10"
//       placeholder="Escribe el nombre de la empresa" />
//   </div>
// </FormField>
// <Card className="divide-y divide-gray-light">
//   <div className="flex gap-4 overflow-hidden p-2">
//     <span className="min-w-fit">Pepe Alonso Electricidad</span>
//     <address className="w-max truncate text-sm font-normal not-italic text-gray">Avenida Rafael Alberti</address>
//   </div>
//   <div className="flex gap-4 overflow-hidden p-2">
//     <span className="min-w-fit">Pepe Mesa</span>
//     <address className="w-max truncate text-sm font-normal not-italic text-gray">Calle palacios, 1</address>
//   </div>
//   <div className="flex gap-4 overflow-hidden p-2">
//     <span className="min-w-fit">Pepe Almorranas</span>
//     <address className="w-max truncate text-sm font-normal not-italic text-gray">Calle Menesteo S/N</address>
//   </div> 
// </Card>
