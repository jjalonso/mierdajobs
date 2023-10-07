import { getCollection } from "@/app/_server/db/verbs";
import { Reviews } from "./types";

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
