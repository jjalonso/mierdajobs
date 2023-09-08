import type { NextApiRequest } from "next";
import { connectDatabaseMongoDB } from "../db/mongodb";

/**
 * Retrieves data from a MongoDB collection based on the provided collection name and request query parameters.
 * @param collection - The name of the MongoDB collection from which to retrieve data.
 * @param req - The request object containing the query parameters.
 * @returns The retrieved data from the MongoDB collection or an error message along with the error object.
 */

export const fetchGET = async (
  collection: string,
  req: Pick<NextApiRequest, "query">
) => {
  const params = Object.keys(req.query).length > 0 ? req.query : undefined;
  const db: any = await connectDatabaseMongoDB();
  const response = await db.collection(collection).find(params).toArray();
  return response;
};

export const fetchPOST = async (
  collection: string,
  req: Pick<NextApiRequest, "body">
) => {
  const typeInsert = !Array.isArray(req.body) ? "insertOne" : "insertMany";
  const db: any = await connectDatabaseMongoDB();
  console.log(typeof req.body);
  const response = await db.collection(collection)[typeInsert](req.body);
  return response;
};
