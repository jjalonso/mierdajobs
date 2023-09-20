import { insertDataInCollection } from "@/app/_server/db/verbs";
import { DBReviews } from "./types";

export const insertReview = async (body: DBReviews) =>
  await insertDataInCollection("reviews", body);
