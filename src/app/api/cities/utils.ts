import { getCollection } from "@/app/_server/db/verbs";
import { DBCounty } from "../counties/types";
import { IndexedName } from "../types";
import { serializeIndexedName } from "../utils";
export const getResponseDbCity = async (
  collection: string,
  queryObject: Record<string, string> | undefined = undefined
) => {
  const response: DBCounty[] = await getCollection(collection, queryObject);
  const serializedResponse: IndexedName[] = serializeIndexedName(
    response,
    "code",
    "name"
  );
  return serializedResponse;
};

export const getOneCity = async (code: string) =>
  await getResponseDbCity("cities", { code });
