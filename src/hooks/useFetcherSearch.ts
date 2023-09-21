
import { useState } from 'react'
import useSWR from 'swr'
import { useDebounce } from 'usehooks-ts'

const useDebouncedSWR = (query: string, id: string, fetcher: () => any) => {
  const debouncedQuery = useDebounce<string>(query, 500)

  const { data, isLoading } = useSWR<any, Error>(
    query ? `${id}/[${debouncedQuery}]` : null,
    fetcher
  );
}

export default [data, isLoading]