import { useCallback, useState } from "react";
import useSWR from "swr";
import { useDebounce } from "usehooks-ts";

import { getGoogleBusiness } from "@/app/api/get-google-businesses/actions";
import { GoogleBusinesses } from "@/app/api/get-google-businesses/types";

interface UseBusinessFieldReturn {
  data: GoogleBusinesses[],
  isLoading: boolean,
  query: string,
  isTouched: boolean,
  onFocus: () => void,
  setQuery: (query: string) => void
}

const useBusinessField = (): UseBusinessFieldReturn => {
  const [isTouched, setTouched] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce<string>(query, 400);

  const { data = [], isLoading } = useSWR<GoogleBusinesses[], Error>(
    debouncedQuery ? `get-google-business/${debouncedQuery}` : null,
    () => getGoogleBusiness(debouncedQuery) as unknown as Promise<GoogleBusinesses[]>
  );

  const onFocus = useCallback(() => setTouched(true), []);

  return { data, isLoading, query, setQuery, isTouched, onFocus }
}

export { useBusinessField };
export type { UseBusinessFieldReturn }