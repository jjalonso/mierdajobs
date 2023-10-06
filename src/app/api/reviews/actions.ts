import { RequestReviews } from "./types";
import { insertReviews } from "./utils";

export const postReviews = async (body: RequestReviews) =>
  await insertReviews(body);
