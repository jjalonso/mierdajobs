import { Db, Document, Filter, OptionalId, WithId } from "mongodb";

import { connectDB } from "@/app/_server/db/mongodb";

type ParamsProps = Filter<WithId<Document>>;
export type BodyProps = OptionalId<Document> | OptionalId<Document>[];

export const getCollection = async (
	collection: string,
	params: ParamsProps
) => {
	const db: Db = await connectDB();
	const response = await db.collection(collection).find(params).toArray();
	return response;
};

export const insertDataInCollection = async (
	collection: string,
	body: BodyProps
) => {
	const db: Db = await connectDB();
	const response = !Array.isArray(body)
		? await db.collection(collection).insertOne(body)
		: await db.collection(collection).insertMany(body);
	return response;
};
