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
    working_hours_pw,
    contract_fraud,
    annual_leave,
    comment,
  } = review;
  return {
    gplace_id,
    created_at,
    monthly_salary,
    working_hours_pw,
    contract_fraud,
    annual_leave,
    comment,
  };
};
