import { getCollection } from "@/app/_server/db/verbs";
import { DBCounty } from "../counties/types";
import { IndexedName } from "../types";
import { serializeIndexedName } from "../utils";

export const getCities = async (county: string) => {
  const queryObject = { code_province: county };
  const response: DBCounty[] = await getCollection("cities", queryObject);
  const serializedResponse: IndexedName[] = serializeIndexedName(
    response,
    "code",
    "name"
  );
  return serializedResponse;
};
