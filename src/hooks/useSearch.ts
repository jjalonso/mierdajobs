
import diacritics from 'diacritics';
import Fuse from 'fuse.js'
import { useEffect, useMemo } from "react"

import { IndexedName } from '@/app/api/types'

function getFn(item: IndexedName, path: any) {
  return diacritics.remove(Fuse.config.getFn(item, path) as string);
}

const useSearch = (data: any, query: string, by = ['name']) => {
  const options = useMemo(() => ({
    keys: by,
    getFn,
    threshold: 0,
    location: 0,
    distance: 0,
  }), [by])
  const fuse = useMemo(() => new Fuse<IndexedName>(data, options), [data, options])
  if (query.length === 0) return data
  const cleanQuery = diacritics.remove(query);
  return fuse.search(cleanQuery).map(result => result.item);
}

export default useSearch