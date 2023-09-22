import { useState } from "react";
import useSWR from "swr";
import { useDebounce } from "usehooks-ts";

import { BusinessResponse } from "@/app/api/retrieve-business/types";

const useBusinessField = (countyId: string, cityId: string) => {
  const [query, setQuery] = useState<string>('');
  const debouncedQuery = useDebounce<string>(query, 500);

  const { data, isLoading } = useSWR<BusinessResponse[], Error>(
    debouncedQuery ? `get-google-business/${debouncedQuery}/${cityId}/${countyId}` : null,
    () => getGoogleBusiness(debouncedQuery, cityId, countyId)
  );

  return [setQuery, data, isLoading];
}

export default useBusinessField;