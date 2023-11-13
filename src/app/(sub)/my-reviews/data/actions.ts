import moment from "moment";
import { getServerSession } from "next-auth";

import { ReviewDB } from "../../types";
import { contractFraudValues } from "../../values";

import { GetMyReviewsResponse } from "./types"

import { fetchGPlaceDetails } from "@/lib/google-place/api";
import { reviews } from "@/lib/mongodb/collections";

const getMyReviews = async (): Promise<GetMyReviewsResponse> => {
  const session = await getServerSession();
  console.log("session", session)
  if (!session) throw new Error("Session required");

  const cReviews = await reviews()
  const allReviews = await cReviews.find({ user: session?.user.id }).toArray();
  const responseReviews = await Promise.all(allReviews.map(async (item: ReviewDB) => {
    // TODO: Theorically this should be cached for all users, check if its true
    const { error_message, result } = await fetchGPlaceDetails(item.place_id);
    if (!result) throw Error(error_message);

    return {
      id: item._id,
      name: result.name,
      created_at: moment(item.created_at).format("MMMM YYYY"),
      working_hours_pw: (item.working_hours / 4).toFixed(2).replace(/[.,]00$/, ""),
      monthly_salary: item.monthly_salary,
      contract_fraud: contractFraudValues[item.contract_fraud].title,
      annual_leave: item.annual_leave,
      comment: item.comment,
      likes: item.likes,
    };
  }))

  return {
    totalReviews: responseReviews.length,
    reviews: responseReviews
  };
}

export default getMyReviews;