import { connectDB } from "@/app/_server/db/mongodb";

export const getCollection = async (
  collection: string,
  param?: Record<string, any>
) => {
  const db: any = await connectDB();
  const response = await db.collection(collection).find(param).toArray();
  return response;
};

export const insertDataInCollection = async (
  collection: string,
  body: Record<string, any>
) => {
  const typeInsert = !Array.isArray(body) ? "insertOne" : "insertMany";
  const db: any = await connectDB();
  const response = await db.collection(collection)[typeInsert](body);
  return response;
};