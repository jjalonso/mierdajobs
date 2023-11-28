"use server";

import moment from "moment";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { getServerSession } from "next-auth";

import { ReviewDB } from "../../types";
import { contractFraudValues } from "../../values";

import { GetMyReviewsResponse } from "./types"

import authOptions from "@/app/(auth)/api/auth/_options/options";
import { fetchGPlaceDetails } from "@/lib/google-place/api";
import { reviews } from "@/lib/mongodb/collections";
import { recordPlausibleEvent } from "@/lib/plausible";

const getMyReviews = async (): Promise<GetMyReviewsResponse> => {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Session required");

  const cReviews = await reviews()
  const allReviews = await cReviews.find({ user: session?.user.id, disabled: { $ne: true } }).toArray();
  const responseReviews = await Promise.all(allReviews.map(async (item: ReviewDB) => {
    // TODO: Theorically this should be cached for all users, check if its true
    const { error_message, result } = await fetchGPlaceDetails(item.place_id);
    if (!result) throw Error(error_message);

    return {
      _id: item._id.toString(),
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

const deleteMyReview = async (id: string): Promise<void> => {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Session required");

  const cReviews = await reviews()

  const filter = {
    _id: new ObjectId(id) as unknown as string,
    user: session.user.id
  }
  const operation = {
    $set: { disabled: true },
  };

  // Soft delete
  await cReviews.updateOne(filter, operation);
  await recordPlausibleEvent(
    "delete-review",
    { id, user: session.user.email as string },
    {
      "X-Forwarded-For": headers().get("x-forwarded-for") || "",
      "User-Agent": headers().get("user-agent") || ""
    }
  )
  revalidatePath("/my-reviews")
}

export { getMyReviews, deleteMyReview };
