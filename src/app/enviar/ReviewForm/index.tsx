import React, { useCallback } from "react"
import { useForm } from "react-hook-form";
import useSWR from 'swr';
import { useDebounce } from "usehooks-ts";

import { Autocomplete, Option } from "@/components/Autocomplete";
import FormField from "@/components/FormField";
import { Select, SelectOption } from "@/components/Select";

const ReviewForm: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [businessQuery, setBusinessQuery] = React.useState<string>('');
  const debouncedBusinessQuery = useDebounce<string>(businessQuery, 500)
  const businessFetcher = (url: string) => fetch(url).then(res => res.json());
  const { data, error, isLoading } = useSWR('/api/user/123', fetcher)

  const onSubmit = useCallback((data: any) => console.log('Submit', data), []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-10">
      <div className="flex gap-6">

        <FormField
          className="w-1/4"
          label="Provincia"
        // error={errors.county}
        >
          <Select placeholder="Seleccione...">
            <SelectOption value={{ id: '1', name: 'Cadiz (mock)' }} />
            <SelectOption value={{ id: '2', name: 'Malaga (mock)' }} />
          </Select>
        </FormField>

        <FormField
          className="w-2/4"
          label="Localidad"
        // error={errors.county}
        >

          <Select placeholder="Seleccione..."
            disabled
          >
            <SelectOption value={{ id: '1', name: 'Puerto de Santa Maria, El (mock)' }} />
            <SelectOption value={{ id: '2', name: 'Jerez de la frontera (mock)' }} />
          </Select>
        </FormField>
      </div>
      <div className="flex">
        <FormField
          className="w-2/4"
          label="Empresa"
        // error={errors.county}
        >
          <Autocomplete
            placeholder="Busque por el nombre del negocio..."
            onQueryChange={(query) => setBusinessQuery(query)}
          >
            {/* 
              TODO:
              Change it to typeahead
              Populate with data from API 
            */}
            <Option value={{ id: '1', name: 'Puerto de Santa Maria, El (mock)' }} />
            <Option value={{ id: '2', name: 'Jerez de la frontera (mock)' }} />
          </Autocomplete>
          <button type="submit">Continuar</button>
        </FormField>
      </div>
    </form >
  )
}

export default ReviewForm