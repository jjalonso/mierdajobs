import { disconnectDB } from "@/app/_server/db/mongodb";
import { NextResponse } from "next/server";
import { parseParams } from "../utils";
import { getReviews } from "./actions";
import { schemaGetReviews } from "./schema";

export const GET = async (request: Request) => {
	try {
		const params = parseParams(request.url);
		const gplace_id = params.get("id");

		const { error, value } = schemaGetReviews.validate({
			gplace_id
		});

		if (error) {
			return NextResponse.json(error.message, { status: 424 });
		}

		const response = await getReviews(value.gplace_id);

		return NextResponse.json(response, { status: 201 });
	} catch (error) {
		return console.error(error);
	} finally {
		await disconnectDB();
	}
};
