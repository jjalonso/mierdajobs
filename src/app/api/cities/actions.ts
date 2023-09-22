"use server"

import { DBCounty } from "../counties/types";
import { IndexedName } from "../types";
import { serializeIndexedName } from "../utils";

import { getCollection } from "@/app/_server/db/verbs";

const getResponseDb = async (
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

export const getCities = async (county: string) =>
  await getResponseDb("cities", { code_province: county });

export const getOneCity = async (code: string) =>
  await getResponseDb("cities", { code });
