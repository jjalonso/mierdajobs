import type { NextApiRequest } from "next";
import {
  connectDatabaseMongoDB,
  disconnectDatabaseMongoDB,
} from "../db/mongodb";

type ParamsProps = {
  [key: string]: any;
};

const serializerParams = (request: Request) => {
  let params: ParamsProps = {};
  const { searchParams } = new URL(request.url);
  if (searchParams.size === 0) {
    return undefined;
  } else {
    searchParams.forEach((value: string, key: string) => {
      params = { ...params, [key]: value };
    });
    return params;
  }
};

/**
 * Retrieves data from a MongoDB collection based on the provided collection name and request query parameters.
 * @param collection - The name of the MongoDB collection from which to retrieve data.
 * @param req - The request object containing the query parameters.
 * @returns The retrieved data from the MongoDB collection or an error message along with the error object.
 */

export const fetchGET = async (collection: string, request: Request) => {
  const serializedParams: ParamsProps | undefined = serializerParams(request);
  const db: any = await connectDatabaseMongoDB();
  const response = await db
    .collection(collection)
    .find(serializedParams)
    .toArray();
  await disconnectDatabaseMongoDB();
  return response;
};

export const fetchPOST = async (collection: string, request: Request) => {
  const adaptedRequest = await request.json();
  const typeInsert = !Array.isArray(adaptedRequest)
    ? "insertOne"
    : "insertMany";
  const db: any = await connectDatabaseMongoDB();
  const response = await db.collection(collection)[typeInsert](adaptedRequest);
  await disconnectDatabaseMongoDB();
  return response;
};
