import {
  BusinessResponse,
  GooglePlaceApi,
  Record,
  ResultGooglePlaceApi,
  TypeRequest,
} from "./type";

const typeRequestOptions = {
  county: "code",
  city: "parent_code",
};

export const serializerParams = (request: Request, type: TypeRequest) => {
  let params: Record = {};
  const { searchParams } = new URL(request.url);
  if (searchParams.size === 0) {
    return undefined;
  } else {
    searchParams.forEach((value: string, key: string) => {
      if (value.length === 1) {
        value = `0${value}`;
      }
      key = typeRequestOptions[type];
      params = { ...params, [key]: value };
    });

    return params;
  }
};

export const serializerResponseCity = (response: Record[]) => {
  const serializedCity: Record[] = response.map((item: Record) => ({
    id: item.parent_code,
    name: item.label,
  }));

  return serializedCity;
};

export const serializerResponseCounty = (response: Record[]) => {
  const serializedCounty: Record[] = response.map((item: Record) => ({
    id: item.code,
    name: item.label,
  }));

  return serializedCounty;
};

export const serializerResponseApiGooglePlace = (response: GooglePlaceApi) => {
  let selectedFieldsResponse: BusinessResponse[] = [];
  response.results.forEach((item: ResultGooglePlaceApi) => {
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
