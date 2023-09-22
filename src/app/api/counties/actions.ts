"use server"

import { IndexedName } from "../types";
import { serializeIndexedName } from "../utils";

import { DBCounty } from "./types";

import { getCollection } from "@/app/_server/db/verbs";

const getResponseDb = async (
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

export const getCounties = async () => await getResponseDb("counties");

export const getOneCounty = async (id: string) =>
  await getResponseDb("counties", { code: id });
