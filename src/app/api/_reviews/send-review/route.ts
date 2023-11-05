import { NextResponse } from "next/server";

import { sendReview } from "./actions";
import { schemaReviews } from "./schema";

import { disconnectDB } from "@/app/_server/db/mongodb";

export const POST = async (request: Request) => {
	try {
		const bodyObject = await request.json();

		const { error, value } = schemaReviews.validate(bodyObject);

		if (error) {
			return NextResponse.json(error.message, { status: 424 });
		}

		await sendReview(value);

		return NextResponse.json({}, { status: 201 });
	} catch (error) {
		return console.error(error);
	} finally {
		await disconnectDB();
	}
};
