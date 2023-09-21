"use server"

import { IndexedName } from "../types";
import { serializeIndexedName } from "../utils";

import { DBCounty } from "./types";

import { getCollection } from "@/app/_server/db/verbs";

export const getCounties = async () => {
  const response: DBCounty[] = await getCollection("counties");
  const serializedResponse: IndexedName[] = serializeIndexedName(
    response,
    "code",
    "label"
  );
  return serializedResponse;
};
