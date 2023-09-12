export type DbResponse = {
  _id: string;
  parent_code: string;
  code: string;
  label: string;
};

export type DbIdNamePair = {
  id: string;
  name: string;
};

export type DbParams = {
  [key: string]: any;
};
