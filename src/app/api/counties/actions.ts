import { getCollection } from "@/app/_server/db/verbs";
import { IndexedName } from "../types";
import { serializeIndexedName } from "../utils";
import { DBCounty } from "./types";

export const getCounties = async (code?: string) => {
  const queryObject = code ? { code } : undefined;
  const response: DBCounty[] = await getCollection("counties", queryObject);
  const serializedResponse: IndexedName[] = serializeIndexedName(
    response,
    "code",
    "label"
  );
  return serializedResponse;
};
