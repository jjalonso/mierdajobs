"use server";

import moment from "moment";
import { ObjectId } from "mongodb";

import { ReviewDB } from "../../types";
import { contractFraudValues } from "../../values";

import { reviews, users } from "@/lib/mongodb/collections";

export const getReviews = async (place_id: string) => {
	// query params are always string or undefined, so no need to validate
	// No risk on place_id if maliciusly invoked, it will just return an empty find

	// Get collections
	const cReviews = await reviews()
	const cUsers = await users()

	// Get business reviews and get user avatar
	const allReviews = await cReviews.find({ place_id }).toArray();
	const responseReviews = await Promise.all(allReviews.map(async (item: ReviewDB) => {
		const result = await cUsers.findOne({ _id: new ObjectId(item.user) })

		// build review
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
		totalReviews: allReviews.length,
		reviews: responseReviews
	};
};
