import {
  getCollection,
  insertDataInCollection,
  updateDataInCollection,
} from "@/app/_server/db/verbs";
import { Business, Reviews } from "./types";

export const serializeBodyBusiness = (business: Business) => {
  const { gplace_id, county, city, address, name } = business;
  return { gplace_id, county, city, address, name };
};

export const serializeBodyReview = (review: Reviews) => {
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

export const checkBusssinessInDB = async (gplace_id: string) =>
  getCollection("bussiness", { gplace_id });

export const insertDataInBussinessDB = async (body: Business) => {
  const bodyObjectBusiness = serializeBodyBusiness(body);
  const { gplace_id } = bodyObjectBusiness;
  const foundBussinessInDB = await checkBusssinessInDB(gplace_id);

  if (foundBussinessInDB.length > 0) {
    await updateDataInCollection(
      "bussiness",
      { gplace_id },
      bodyObjectBusiness
    );
  } else {
    await insertDataInCollection("bussiness", bodyObjectBusiness);
  }
};
