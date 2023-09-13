import {
  connectDatabaseMongoDB,
  disconnectDatabaseMongoDB,
} from "@/app/server/db/mongodb";
import { DbParams } from "@/app/server/types/db.type";
import { serializerParams } from "@/app/server/utils/functions";

/**
 * Retrieves data from a MongoDB collection based on the provided collection name and request query parameters
 * @param collection - The name of the MongoDB collection from which to retrieve data
 * @param req - The request object containing the query parameters
 * @returns The retrieved data from the MongoDB collection or an error message along with the error object
 */

export const GET_MONGODB = async (collection: string, request: Request) => {
  const serializedParams: DbParams | undefined = serializerParams(request);
  const db: any = await connectDatabaseMongoDB();
  const response = await db
    .collection(collection)
    .find(serializedParams)
    .toArray();
  await disconnectDatabaseMongoDB();
  return response;
};
