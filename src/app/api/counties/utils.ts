import { getCollection } from "@/app/_server/db/verbs";
import { IndexedName } from "../types";
import { serializeIndexedName } from "../utils";
import { DBCounty } from "./types";

export const getResponseDbCounty = async (
  collection: string,
  queryObject: Record<string, string> | undefined = undefined
) => {
  const response: DBCounty[] = await getCollection(collection, queryObject);
  const serializedResponse: IndexedName[] = serializeIndexedName(
    response,
    "code",
    "label"
  );
  return serializedResponse;
};

export const getOneCounty = async (id: string) =>
  await getResponseDbCounty("counties", { code: id });
