export type DBCity = {
  _id: string;
  parent_code: string;
  code: string;
  label: string;
};

export type CityResponse = {
  [key: string]: any;
};
