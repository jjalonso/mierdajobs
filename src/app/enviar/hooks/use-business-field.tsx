import { useState } from "react";
import useSWR from "swr";
import { useDebounce } from "usehooks-ts";

import { getGoogleBusiness } from "@/app/api/get-google-businesses/actions";
import { GoogleBusinesses } from "@/app/api/get-google-businesses/types";

interface UseBusinessFieldReturn {
  data: GoogleBusinesses[],
  isLoading: boolean,
  query: string,
  setQuery: (query: string) => void
}

const useBusinessField = (): UseBusinessFieldReturn => {
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce<string>(query, 400);

  // TODO: REEMPLACE WITH SOME REUSABLE TYPE  
  const { data = [], isLoading } = useSWR<GoogleBusinesses[], Error>(
    debouncedQuery ? `get-google-business/${debouncedQuery}` : null,
    () => getGoogleBusiness(debouncedQuery) as unknown as Promise<GoogleBusinesses[]>
  );

  return { data, isLoading, query, setQuery }
}

export { useBusinessField };
export type { UseBusinessFieldReturn }