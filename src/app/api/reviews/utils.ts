import {
  getCollection,
  insertDataInCollection,
  updateDataInCollection,
} from "@/app/_server/db/verbs";
import { Business, RequestReviews, Reviews } from "./types";

const serializeBodyBusiness = (business: Business) => {
  const { gplace_id, county, city, address, name } = business;
  return { gplace_id, county, city, address, name };
};

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

const insertDataBussinessForReviewDB = async (body: Business) => {
  const bodyObjectBusiness = serializeBodyBusiness(body);
  const { gplace_id } = bodyObjectBusiness;
  const foundBussinessInDB = await checkIfBusinessExistsInReviewDB(gplace_id);

  if (foundBussinessInDB.length > 0) {
    return await updateDataInCollection(
      "bussiness",
      { gplace_id },
      bodyObjectBusiness
    );
  } else {
    return await insertDataInCollection("bussiness", bodyObjectBusiness);
  }
};

const insertDataReviewForReviewDB = async (body: Reviews) => {
  const bodyObjecReviews = serializeBodyReview(body);
  return await insertDataInCollection("reviews", bodyObjecReviews);
};

export const insertReviews = async (body: RequestReviews) =>
  await Promise.all([
    insertDataBussinessForReviewDB(body),
    insertDataReviewForReviewDB(body),
  ]);
