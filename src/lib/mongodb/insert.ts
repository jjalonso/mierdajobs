import { dbPromise } from "./client";

export const insertInCollection = async (
  collectionName: string,
  body: Record<string, unknown> | Record<string, unknown>[]
) => {
  const db = await dbPromise;
  const response = !Array.isArray(body)
    ? await db.collection(collectionName).insertOne(body)
    : await db.collection(collectionName).insertMany(body);
  return response;
};
