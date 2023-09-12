import { DbIdNamePair, DbParams, DbResponse } from "@/app/server/types/db.type";
import { GooglePlaceParams } from "@/app/server/types/google-place.type";

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

export const serializerResponseCountiesAndCities = (response: DbResponse[]) => {
  const serializedResponse: DbIdNamePair[] = response.map(
    (item: DbResponse) => ({
      id: item.parent_code,
      name: item.label,
    })
  );
  return serializedResponse;
};
