import { getResponseDbCity } from "./utils";

export const getCities = async (county: string) =>
  await getResponseDbCity("cities", { code_province: county });
