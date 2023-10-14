
import diacritics from "diacritics";
import Fuse from "fuse.js"
import { useMemo } from "react"

const getFn = <T,>(item: T, path: string | string[]) => {
  return diacritics.remove(Fuse.config.getFn(item, path) as string);
}

const useSearch = <T,>(data: T[], query: string, by: string[] = ["name"]): T[] => {
  const options = useMemo(() => ({
    keys: by,
    getFn: getFn<T>,
  }), [by])
  const fuse = useMemo(() => new Fuse<T>(data, options), [data, options])
  if (query.length === 0) return data
  const cleanQuery = diacritics.remove(query);
  return fuse.search(cleanQuery).map(result => result.item);
}

export default useSearch