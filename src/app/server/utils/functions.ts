import { DbIdNamePair, DbParams, DbResponse } from "@/app/server/types/db.type";
import {
  GooglePlaceParams,
  GooglePlaceResponse,
  GooglePlaceResults,
} from "@/app/server/types/google-place.type";

export const serializerParams = (request: Request) => {
  let params: DbParams | GooglePlaceParams = {};
  const { searchParams } = new URL(request.url);
  if (searchParams.size === 0) {
    return undefined;
  } else {
    searchParams.forEach((value: string, key: string) => {
      params = { ...params, [key]: value };
    });
    return params;
  }
};

export const serializerResponseIdNameRecord = (response: DbResponse[]) => {
  const serializedResponse: DbIdNamePair[] = response.map(
    (item: DbResponse) => ({
      id: item.parent_code,
      name: item.label,
    })
  );
  return serializedResponse;
};

export const serializerResponseApiGooglePlace = (
  response: GooglePlaceResponse
) => {
  let selectedFieldsResponse: GooglePlaceParams[] = [];
  response.results.forEach((item: GooglePlaceResults) => {
    if (item.business_status !== "CLOSED_PERMANENTLY") {
      selectedFieldsResponse.push(...selectedFieldsResponse, {
        name: item.name,
        address: item.formatted_address,
        id: item.place_id,
      });
    }
  });

  return selectedFieldsResponse;
};
