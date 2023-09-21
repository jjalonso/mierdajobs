import { IndexedName } from "@/app/api/types";

export const buildBusinessURL = (query: string, county: IndexedName, city: IndexedName) => query ?
  `${process.env.NEXT_PUBLIC_URL}/api/retrieve-business?q=${query}&county=${county.name}&city=${city.name}
` : null