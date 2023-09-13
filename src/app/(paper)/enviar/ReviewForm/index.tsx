'use client';

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useCallback } from "react"
import { useForm } from "react-hook-form";
import useSWR from 'swr';
import { useDebounce } from "usehooks-ts";

import Props from "./props";

import { Autocomplete, Option } from "@/components/Autocomplete";
import FormField from "@/components/FormField";
// import { Select, SelectOption } from "@/components/Select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const ReviewForm: React.FC<Props> = ({ counties }) => {
  // const { counties, error, isLoading } = useSWR('/api/user/123', businessesFetcher)

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [businessQuery, setBusinessQuery] = React.useState<string>('');
  // const debouncedBusinessQuery = useDebounce<string>(businessQuery, 500)
  // const businessFetcher = (url: string) => fetch(url).then(res => res.json());
  // const { data, error, isLoading } = useSWR('/api/user/123', businessesFetcher)

  const onSubmit = useCallback((data: any) => console.log('Submit', data), []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-10">
      <div className="flex w-full flex-col gap-6 md:flex-row">

        <FormField
          className="w-full md:w-1/4"
          label="Provincia"
        // error={errors.county}
        >
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Seleccione..." />
            </SelectTrigger>
            <SelectContent>
              {counties.map((county) =>
                <SelectItem key={county.id}
                  value={county.id}>{county.name}</SelectItem>
              )}
            </SelectContent>
          </Select>
        </FormField>

        <FormField
          className="w-full md:w-2/4"
          label="Localidad"
        // error={errors.county}
        >
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="Seleccione..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectContent>
          </Select>
        </FormField>
      </div>
      <div className="flex w-full flex-col gap-1 md:w-2/4">

        <FormField
          label="Lugar de trabajo"
        // error={errors.county}
        >
          <div className="relative">
            <MagnifyingGlassIcon className='absolute m-2.5 h-6 w-6 text-gray' />
            <Input className="pl-10"
              placeholder="Escribe el nombre de la empresa" />
          </div>
        </FormField>
        <Card className="divide-y divide-gray-light">
          <div className="flex place-content-between gap-4 p-2">
            <span className="min-w-fit">Pepe Alonso Electricidad</span>
            <address className="w-max truncate text-sm font-normal not-italic text-gray">Avenida Rafael Alberti de los milagros 6</address>
          </div>
          <div className="flex place-content-between gap-4 p-2">
            <span className="min-w-fit">Pepe Mesa</span>
            <address className="w-max truncate text-sm font-normal not-italic text-gray">Calle palacios, 1</address>
          </div>
          <div className="flex place-content-between gap-4 p-2">
            <span className="min-w-fit">Pepe Almorranas</span>
            <address className="w-max truncate text-sm font-normal not-italic text-gray">Calle Menesteo S/N</address>
          </div>

        </Card>
      </div>

      <Button className="self-end"
        type="submit">Continuar</Button>
    </form >
  )
}

export default ReviewForm
//     <Select placeholder="Seleccione..."
//       {...register('county')}>
//       <SelectOption value={{ id: '1', name: 'Cadiz (mock)' }} />
//       <SelectOption value={{ id: '2', name: 'Malaga (mock)' }} />
//     </Select>
//   </FormField>

//   <FormField
//     className="w-2/4"
//     label="Localidad"
//   // error={errors.county}
//   >

//     <Select placeholder="Seleccione..."
//       disabled
//     >
//       <SelectOption value={{ id: '1', name: 'Puerto de Santa Maria, El (mock)' }} />
//       <SelectOption value={{ id: '2', name: 'Jerez de la frontera (mock)' }} />
//     </Select>
//   </FormField>
// </div>
// <div className="flex">
//   <FormField
//     className="w-2/4"
//     label="Empresa"
//   // error={errors.county}
//   >
//     <Autocomplete
//       placeholder="Busque por el nombre del negocio..."
//       onQueryChange={(query) => setBusinessQuery(query)}
//     >
//       {/*
//         TODO:
//         Change it to typeahead
//         Populate with data from API
//       */}
//       <Option value={{ id: '1', name: 'Puerto de Santa Maria, El (mock)' }} />
//       <Option value={{ id: '2', name: 'Jerez de la frontera (mock)' }} />
//     </Autocomplete>