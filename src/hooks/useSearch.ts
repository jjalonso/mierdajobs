import Fuse from 'fuse.js'
import { useMemo } from "react"

const useSearch: IndexedName[] = (data: any, query: string, by: string[] = ['name']) => {
  const fuse = useMemo(() => new Fuse(data, { keys: by }), [by, data])
  const results = useMemo(() => fuse.search(query), [fuse, query])
  return results;
}

export default useSearch