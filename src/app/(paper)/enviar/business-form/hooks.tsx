import { useState } from "react";
import useSWR from "swr";
import { useDebounce } from "usehooks-ts";

import { BusinessResponse } from "@/app/api/retrieve-business/types";
import { IndexedName } from "@/app/api/types";

const useBusinessField = (countyId: string, cityId: string) => {
  const [query, setQuery] = useState<string>('');
  const debouncedQuery = useDebounce<string>(query, 500);
  const URL = `${process.env.NEXT_PUBLIC_URL}/api/retrieve-business?q=${debouncedQuery}&county=${countyId}&city=${cityId}`;

  const { data: businesses, isLoading: isBusinessesLoading } = useSWR<BusinessResponse[], Error>(
    debouncedQuery ?
      URL : null,
    (url: URL) => fetch(url).then((res) => res.json())
  );

  return [value, setValue, setQuery];
}

export default useBusinessField;