import { Db, Filter, Document, WithId, OptionalId } from "mongodb";

import { connectDB } from "@/app/_server/db/mongodb";

export const getCollection = async (
  collection: string,
  param: Filter<WithId<Document>> = {}
) => {
  const db: Db = await connectDB();
  console.log(typeof db);
  const response = await db.collection(collection).find(param).toArray();
  return response;
};

export const insertDataInCollection = async (
  collection: string,
  body: OptionalId<Document> | OptionalId<Document>[]
) => {
  const typeInsert = !Array.isArray(body) ? "insertOne" : "insertMany";
  const db: Db = await connectDB();
  const response = await db
    .collection(collection)
    [typeInsert](body as Document[]);
  return response;
};

export const updateDataInCollection = async (
  collection: string,
  filter: Filter<WithId<Document>> = {},
  body: Filter<WithId<Document>> = {}
) => {
  const typeInsert = !Array.isArray(body) ? "updateOne" : "updateMany";
  const db: Db = await connectDB();
  const response = await db
    .collection(collection)
    [typeInsert](filter, { $set: body });
  return response;
};
