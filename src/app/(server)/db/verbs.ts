import { connectDB, disconnectDB } from "@/app/(server)/db/mongodb";
import { Record } from "../utils/type";

export const getCollection = async (
  collection: string,
  param: Record | undefined
) => {
  const db: any = await connectDB();
  const response = await db.collection(collection).find(param).toArray();
  await disconnectDB();
  return response;
};
