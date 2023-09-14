import { connectDB, disconnectDB } from "@/app/_server/db/mongodb";

export const getCollection = async (
  collection: string,
  param: Record<string, string>
) => {
  const db: any = await connectDB();
  const response = await db.collection(collection).find(param).toArray();
  await disconnectDB();
  return response;
};
