import { GooglePlaceApi } from "../_server/google-place/types";

export const sortListAlphabetically = (
  a: Record<string, string>,
  b: Record<string, string>
) => a.name.localeCompare(b.name, "es", { sensitivity: "accent" });

export const serializeIndexedName = (
  data: Record<string, string>[],
  idKey: string,
  nameKey: string
) =>
  data
    .map((item) => ({
      id: item[idKey],
      name: item[nameKey],
    }))
    .sort(sortListAlphabetically);

export const parseParams = (url: string) => {
  const { searchParams } = new URL(url);
  return searchParams;
};

export const serializeIndexedBusiness = (response: GooglePlaceApi) => {
  let selectedFieldsResponse: Record<string, string>[] = [];
  response.results.forEach((item) => {
    if (item.business_status !== "CLOSED_PERMANENTLY") {
      selectedFieldsResponse.push({
        name: item.name,
        address: item.formatted_address,
        id: item.place_id,
      });
    }
  });
  return selectedFieldsResponse.sort(sortListAlphabetically);
};

export const handleErrors = (message: string, status: number) =>
  new Response(JSON.stringify({ error: message, status }), {
    status,
  });
