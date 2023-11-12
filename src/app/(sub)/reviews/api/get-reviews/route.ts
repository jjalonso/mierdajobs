import { NextResponse } from "next/server";

import { parseParams } from "../../../search/api/utils";

import { getReviews } from "./actions";
import schema from "./schema";

import { disconnectDB } from "@/app/_server/db/mongodb";

export const GET = async (request: Request) => {
	try {
		const params = parseParams(request.url);
		const place_id = params.get("id");

		const { error, value } = schema.validate({
			place_id
		});

		if (error) {
			return NextResponse.json(error.message, { status: 424 });
		}

		const response = await getReviews(value.place_id);

		return NextResponse.json(response, { status: 201 });
	} catch (error) {
		return console.error(error);
	} finally {
		await disconnectDB();
	}
};
