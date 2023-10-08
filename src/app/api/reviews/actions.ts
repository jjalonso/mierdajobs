import { RequestReviews } from "./types";
import { serializeBodyBusiness, serializeBodyReview } from "./utils";

import { insertDataInCollection } from "@/app/_server/db/verbs";

export const insertReview = async (body: RequestReviews) => {
  const bodyObjectBusiness = serializeBodyBusiness(body);
  const bodyObjectReview = serializeBodyReview(body);

  await insertDataInCollection("business", bodyObjectBusiness);
  await insertDataInCollection("reviews", bodyObjectReview);
  return {
    message: "La reseña se ha guardado correctamente",
  };
};
