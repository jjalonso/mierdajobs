import type { NextApiRequest } from "next";
import methodVerbsIntl from "../../config/locale/be/method-verbs/es.json";
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
  try {
    const params = Object.keys(req.query).length > 0 ? req.query : undefined;
    const db: any = await connectDatabaseMongoDB();
    const response = await db.collection(collection).find(params).toArray();
    return response;
  } catch (error) {
    return {
      message: methodVerbsIntl["mierdajobs.method.verbs.get.error"],
      error,
    };
  }
};

export const fetchPOST = async (
  collection: string,
  req: Pick<NextApiRequest, "body">
) => {
  const typeInsert = typeof req.body === "object" ? "insertOne" : "insertMany";
  try {
    const db: any = await connectDatabaseMongoDB();
    const response = await db.collection(collection)[typeInsert](req.body);
    return response;
  } catch (error) {
    return {
      message: methodVerbsIntl["mierdajobs.method.verbs.post.error"],
      error,
    };
  }
};
