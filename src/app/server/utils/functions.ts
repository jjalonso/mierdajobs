import { ApiResponseProps, IdNamePairProps } from "./props-type";

export const adaptResponseCountiesAndCities = (
  response: ApiResponseProps[]
) => {
  const serializedResponse: IdNamePairProps[] = response.map(
    (item: ApiResponseProps) => ({
      id: item.parent_code,
      name: item.label,
    })
  );
  return serializedResponse;
};
