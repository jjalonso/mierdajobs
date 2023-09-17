'use client';

import React, { useCallback, useState } from "react"
import { useForm, useWatch } from "react-hook-form";
import useSWR from 'swr';

import Props from "./props";

import { CountyResponse } from "@/app/api/counties/types";
import { Autocomplete, AutocompleteOption } from "@/components/autocomplete";
import FormField from "@/components/formfield";
import useSearch from "@/hooks/useSearch";

const fetcher = (url: URL) => fetch(url).then((res) => res.json());

const ReviewForm: React.FC<Props> = ({ counties }) => {
  const form = useForm();
  const countyValue = useWatch({ control: form.control, name: 'county' });
  const [countyQuery, setCountyQuery] = useState<string>('')

  const filteredCounties = useSearch(counties, countyQuery);

  const { data: cities, isLoading } = useSWR<{ id: string, name: string }[], Error>(
    countyValue ?
      `${process.env.NEXT_PUBLIC_URL}/api/cities?county=${countyValue}` : null,
    fetcher
  );

  const onSubmit = useCallback((data: any) => console.log('Submit', data), []);

  return (
    <form className="flex flex-col gap-6"
      onSubmit={form.handleSubmit(onSubmit)}>
      <div className="flex w-full flex-col gap-6 md:flex-row">

        {/*  COUNTY */}

        <div className="w-full md:w-2/5">
          <FormField label="Provincia">
            <Autocomplete
              onQueryChange={(query) => setCountyQuery(query)}
              placeholder="Seleccione..."
            >
              {filteredCounties.map((county as Indexed) =>
              <AutocompleteOption
                key={county.id}
                value={county}
              >
                {county.name}
              </AutocompleteOption>
              )}
            </Autocomplete>
          </FormField>
        </div>

        {/*  CITY */}

        <div className="w-full md:w-3/5">
          <FormField label="Localidad">
            <Autocomplete
              placeholder="Seleccione..."
            >
              {cities?.map((city) =>
                <AutocompleteOption
                  key={city.id}
                  value={city}
                >
                  {city.name}
                </AutocompleteOption>
              )}
            </Autocomplete>
          </FormField>
        </div>

      </div>

      {/*  BUSINESS */}

      {/* <div className="flex w-full flex-col md:w-2/4">
        <Autocomplete placeholder="Escribe el nombre de la empresa">
          <AutocompleteOption value={{ id: '1', name: 'Pepe Mesa' }}></AutocompleteOption>
          <AutocompleteOption value={{ id: '2', name: 'Pepe Antonio' }} />
          <AutocompleteOption value={{ id: '3', name: 'Pepa' }} />
        </Autocomplete>
      </div> */}

      {/* <Button className="self-end"
        type="submit">Continuar</Button> */}
    </form >
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
