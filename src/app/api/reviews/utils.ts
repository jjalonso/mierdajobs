import {
  getCollection,
  insertDataInCollection,
  updateDataInCollection,
} from "@/app/_server/db/verbs";
import { RequestReviews, Reviews } from "./types";
import { getBusinessFromGooglePlaceApiById } from "@/app/_server/google-place/verbs";

const serializeBodyReview = (review: Reviews) => {
  const created_at = new Date().toISOString();
  const {
    gplace_id,
    monthly_salary,
    contract_fraud,
    annual_leave,
    comment,
    working_hours,
    working_hours_period,
  } = review;
  return {
    created_at,
    gplace_id,
    monthly_salary,
    contract_fraud,
    annual_leave,
    comment,
    working_hours,
    working_hours_period,
  };
};

const checkIfBusinessExistsInReviewDB = async (gplace_id: string) =>
  await getCollection("bussiness", { gplace_id });

const insertDataBussinessForReviewDB = async (gplace_id: string) => {
  const foundBussinessInDB = await checkIfBusinessExistsInReviewDB(gplace_id);
  const businessFromGooglePlaceApi = await getBusinessFromGooglePlaceApiById(
    gplace_id
  );
  const { formatted_address, name, place_id } =
    businessFromGooglePlaceApi.result;

  const objectBodyBussiness = {
    formatted_address,
    name,
    gplace_id: place_id,
  };

  if (foundBussinessInDB.length > 0) {
    return await updateDataInCollection(
      "bussiness",
      { gplace_id },
      objectBodyBussiness
    );
  } else {
    return await insertDataInCollection("bussiness", objectBodyBussiness);
  }
};

const insertDataReviewForReviewDB = async (body: Reviews) => {
  const bodyObjecReviews = serializeBodyReview(body);
  return await insertDataInCollection("reviews", bodyObjecReviews);
};

export const insertReviews = async (body: RequestReviews) =>
  await Promise.all([
    insertDataBussinessForReviewDB(body.gplace_id),
    insertDataReviewForReviewDB(body),
  ]);
