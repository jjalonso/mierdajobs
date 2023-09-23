import { IndexedName } from "@/app/api/types"

interface formValues {
  county: IndexedName,
  city: IndexedName,
  business: IndexedName
}

export type { formValues }