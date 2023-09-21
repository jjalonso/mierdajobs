import { BusinessResponse, BusinessParams } from "./types";

import { GooglePlaceApi } from "@/app/_server/google-place/types";

export const serializerQueryBusiness = (request: Request) => {
  let params = {};
  const { searchParams } = new URL(request.url);
  if (searchParams.size === 0) {
    return undefined;
  } else {
    searchParams.forEach((value: string, key: string) => {
      params = { ...params, [key]: value };
    });
    return params as BusinessParams;
  }
};

export const serializerResponseBusiness = (response: GooglePlaceApi) => {
  let selectedFieldsResponse: BusinessResponse[] = [];
  response.results.forEach((item: GooglePlaceApi["results"][0]) => {
    if (item.business_status !== "CLOSED_PERMANENTLY") {
      selectedFieldsResponse.push({
        name: item.name,
        address: item.formatted_address,
        id: item.place_id,
      });
    }
  });

  return selectedFieldsResponse;
};
