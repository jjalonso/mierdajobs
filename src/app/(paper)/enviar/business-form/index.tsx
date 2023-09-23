'use client';

import _ from 'lodash';
import React, { useCallback, useEffect, useState } from "react"
import { set, useForm, useWatch } from "react-hook-form";
import useSWR from 'swr';
import { useDebounce } from "usehooks-ts";

import { useBusinessField, useCityField, useCountyField } from './hooks';
import Props from "./props";
import { formValues } from './types';

import { getCities } from "@/app/api/cities/actions";
import { IndexedName } from "@/app/api/types";
import { Autocomplete, AutocompleteOption } from "@/components/autocomplete";
import { Button } from "@/components/button";
import FormField from "@/components/formfield";
import useSearch from "@/hooks/useSearch";

const BusinessForm: React.FC<Props> = ({ counties: dataCounties }) => {
  const form = useForm<formValues>({
    defaultValues: {
      county: {},
      city: {},
      business: {}
    }
  });

  const countyValue = useWatch({ control: form.control, name: 'county' });
  const cityValue = useWatch({ control: form.control, name: 'city' });
  const businessValue = useWatch({ control: form.control, name: 'business' });

  const [setCountyQuery, counties] = useCountyField(dataCounties)
  const [setCityQuery, cities, isCitiesLoading] = useCityField(countyValue?.id)
  const [setBusinessQuery, businesses, isBusinessesLoading] = useBusinessField(countyValue?.id, cityValue?.id)

  const onSubmit = useCallback((data: any) => console.log('Submit', data), []);

  // If county change, reset other fields
  useEffect(() => {
    if (!!countyValue) {
      form.resetField('city')
      form.resetField('business')
      setCityQuery('')
      setBusinessQuery('')
    }
  }, [countyValue, form, setBusinessQuery, setCityQuery]);

  // If city change, reset business field
  useEffect(() => {
    if (!!cityValue) {
      form.resetField('business')
      setBusinessQuery('')
    }
  }, [cityValue, form, setBusinessQuery]);

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-6"
    >
      <div className="flex w-full flex-col gap-6 md:flex-row">

        {/*  COUNTY */}

        <div className="w-full md:w-2/5">
          <FormField
            name='county'
            control={form.control}
            label="Provincia">
            {(field) =>
              <Autocomplete
                {...field}
                onQueryChange={(query) => setCountyQuery(query)}
                placeholder="Seleccione..."
              >
                {counties.map((county) =>
                  <AutocompleteOption
                    key={county.id}
                    value={county}
                  >
                    {county.name}
                  </AutocompleteOption>
                )}
              </Autocomplete>
            }
          </FormField>
        </div>

        {/*  CITY */}

        <div className="w-full md:w-3/5">
          <FormField
            name="city"
            control={form.control}
            disabled={isCitiesLoading || _.isEmpty(countyValue)}
            label="Localidad"
          >
            {(field) =>
              <Autocomplete
                {...field}
                placeholder="Seleccione..."
                isLoading={isCitiesLoading}
                onQueryChange={(query) => setCityQuery(query)}
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
            }
          </FormField>
        </div>
      </div>

      {/* BUSINESS */}

      <div className="flex w-full flex-col md:w-[400px]">
        <FormField
          control={form.control}
          disabled={_.isEmpty(cityValue)}
          name="business"
          label="Nombre del Negocio"
        >
          {(field) =>
            <Autocomplete
              {...field}
              placeholder="Escribe para buscar..."
              isLoading={isBusinessesLoading}
              onQueryChange={(query) => setBusinessQuery(query)}
            >
              {businesses?.map((business) =>
                <AutocompleteOption
                  {...field}
                  key={business.id}
                  value={business}
                  noCheckIcon
                >
                  <div className="flex flex-col gap-1">
                    {business.name}
                    <div className='text-sm text-gray'>{business.address}</div>
                  </div>
                </AutocompleteOption>
              )}
            </Autocomplete>
          }
        </FormField>
      </div>

      <Button
        className="w-full self-end md:mt-10 md:w-fit"
        type="submit"
        disabled={_.isEmpty(businessValue)}
      >
        Continuar
      </Button>
    </form >
  )
}

export default BusinessForm;