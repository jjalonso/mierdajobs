import { useState } from "react";
import useSWR from "swr";
import { useDebounce } from "usehooks-ts";

import { getGoogleBusiness } from "@/app/api/retrieve-business/actions";

interface UseBusinessFieldReturn {
  data: GoogleBusiness[],
  isLoading: boolean,
  query: string,
  setQuery: (query: string) => void
}

// TODO: REEMPLACE WITH SOME REUSABLE TYPE
interface GoogleBusiness {
  id: string,
  name: string,
  address: string
}

const useBusinessField = (): UseBusinessFieldReturn => {
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce<string>(query, 400);

  // TODO: REEMPLACE WITH SOME REUSABLE TYPE  
  const { data = [], isLoading } = useSWR<GoogleBusiness[], Error>(
    debouncedQuery ? `get-google-business/${debouncedQuery}` : null,
    () => getGoogleBusiness(debouncedQuery) as unknown as Promise<GoogleBusiness[]>
  );

  return { data, isLoading, query, setQuery }
}

export { useBusinessField };
export type { UseBusinessFieldReturn }