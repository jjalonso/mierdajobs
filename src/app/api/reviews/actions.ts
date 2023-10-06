import { RequestReviews } from "./types";
import { insertDataInBussinessDB } from "./utils";

export const insertReview = async (body: RequestReviews) => {
  const x = await insertDataInBussinessDB(body);
  //PRUEBAS
  return x;
};
