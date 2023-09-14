export type DBCounty = {
  _id: string;
  parent_code: string;
  code: string;
  label: string;
};

export type CountyResponse = {
  [key: string]: any;
};
