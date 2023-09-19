import { getCollection } from "@/app/_server/db/verbs";
import { DBCounty } from "../counties/types";
import { IndexedName } from "../types";
import { serializeIndexedName } from "../utils";

export const getCities = async (county: string, hasCode: boolean = false) => {
  const queryObject: Record<string, string> = !hasCode
    ? { code_province: county }
    : { code: county };
  const response: DBCounty[] = await getCollection("cities", queryObject);
  const serializedResponse: IndexedName[] = serializeIndexedName(
    response,
    "code",
    "name"
  );
  return serializedResponse;
};
