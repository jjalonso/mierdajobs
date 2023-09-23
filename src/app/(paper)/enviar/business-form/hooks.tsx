import { Dispatch, SetStateAction, useState } from "react";
import useSWR from "swr";
import { useDebounce } from "usehooks-ts";

import { getCities } from "@/app/api/cities/actions";
import { getGoogleBusiness } from "@/app/api/retrieve-business/actions";
import { IndexedName } from "@/app/api/types";
import useSearch from "@/hooks/useSearch";

type useBusinessFieldReturn = [
  Dispatch<SetStateAction<string>>,
  GoogleBusiness[],
  boolean
]

// TEMP
interface GoogleBusiness {
  id: string,
  name: string,
  address: string
}

const useBusinessField = (countyId: string, cityId: string): useBusinessFieldReturn => {
  const [query, setQuery] = useState<string>('');
  const debouncedQuery = useDebounce<string>(query, 500);
  // TODO: Change any to a valid and common type

  const { data, isLoading } = useSWR<GoogleBusiness[], Error>(
    debouncedQuery ? `get-google-business/${debouncedQuery}/${cityId}/${countyId}` : null,
    () => getGoogleBusiness(debouncedQuery, countyId, cityId) as unknown as Promise<GoogleBusiness[]>
  );

  return [setQuery, data, isLoading];
}

type useCityFieldReturn = [
  Dispatch<SetStateAction<string>>,
  IndexedName[],
  boolean
]

const useCityField = (countyId: string): useCityFieldReturn => {
  const [query, setQuery] = useState<string>('');
  const { data, isLoading } = useSWR<IndexedName[], Error>(
    countyId ? `get-cities/${countyId}` : null,
    () => getCities(countyId)
  );
  const filteredData = useSearch(data, query);

  return [setQuery, filteredData, isLoading];
}

type useCountyFieldReturn = [
  Dispatch<SetStateAction<string>>,
  IndexedName[],
]

const useCountyField = (counties: IndexedName[]): useCountyFieldReturn => {
  const [query, setQuery] = useState<string>('');
  const data: IndexedName[] = useSearch(counties, query);

  return [setQuery, data];
}
export { useBusinessField, useCityField, useCountyField };