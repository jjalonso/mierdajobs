import { disconnectDB } from "@/app/_server/db/mongodb";
import { NextResponse } from "next/server";
import { insertReview } from "./actions";
import { schemaReviews } from "./schema";

export const POST = async (request: Request) => {
	try {
		const bodyObject = await request.json();

		const { error, value } = schemaReviews.validate(bodyObject);

		if (error) {
			return NextResponse.json(error.message, { status: 424 });
		}

		await insertReview(value);

		return NextResponse.json({}, { status: 201 });
	} catch (error) {
		return console.error(error);
	} finally {
		await disconnectDB();
	}
};
