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
