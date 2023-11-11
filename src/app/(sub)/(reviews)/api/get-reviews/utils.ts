
import moment from "moment"
import { ObjectId } from "mongodb";
import { User } from "next-auth";

import { ReviewDB } from "../types";

import { GetReviewsResponse } from "./types";

import { contractFraudValues } from "@/app/(sub)/(reviews)/reviews/values";
import { dbPromise } from "@/lib/mongodb/client";

export const buildReviews = async (
	reviews: ReviewDB[],
): Promise<GetReviewsResponse> => {
	const db = await dbPromise;
	const builtReviews = await Promise.all(reviews.map(async (item: ReviewDB) => {
		const result = await db.collection<User>("users").findOne({ _id: new ObjectId(item.user) })

		return {
			id: item._id,
			created_at: moment(item.created_at).format("MMMM YYYY"),
			working_hours_pw: (item.working_hours / 4).toFixed(2).replace(/[.,]00$/, ""),
			salary_ph: (item.monthly_salary / item.working_hours).toFixed(2),
			contract_fraud: contractFraudValues[item.contract_fraud].title,
			annual_leave: item.annual_leave,
			comment: item.comment,
			avatar: result ? `/avatars/${result.image}.png` : "",
			likes: item.likes,
		};
	}));

	return {
		totalReviews: reviews.length,
		reviews: builtReviews
	};
};
