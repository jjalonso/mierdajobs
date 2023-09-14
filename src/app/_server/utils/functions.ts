import {
  BusinessResponse,
  GooglePlaceApi,
  ResultGooglePlaceApi,
  TypeRequest,
} from "./types";

const typeRequestOptions = {
  county: "code",
  city: "parent_code",
};

export const serializerParams = (request: Request, type: TypeRequest) => {
  let params: Record<string, string> = {};
  const { searchParams } = new URL(request.url);
  if (searchParams.size === 0) {
    return undefined;
  } else {
    searchParams.forEach((value: string, key: string) => {
      key = typeRequestOptions[type];
      params = { ...params, [key]: value };
    });

    return params;
  }
};

export const serializerQueryGoogle = (request: Request) => {
  let params: Record<string, string> = {};
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

export const serializerResponseCity = (response: Record<string, string>[]) => {
  const serializedCity: Record<string, string>[] = response.map(
    (item: Record<string, string>) => ({
      id: item.parent_code,
      name: item.label,
    })
  );

  return serializedCity;
};

export const serializerResponseCounty = (
  response: Record<string, string>[]
) => {
  const serializedCounty: Record<string, string>[] = response.map(
    (item: Record<string, string>) => ({
      id: item.code,
      name: item.label,
    })
  );

  return serializedCounty;
};

export const serializerResponseApiGooglePlace = (response: GooglePlaceApi) => {
  let selectedFieldsResponse: BusinessResponse[] = [];
  response.results.forEach((item: ResultGooglePlaceApi) => {
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
