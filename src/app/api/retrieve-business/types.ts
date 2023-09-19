export type BusinessQuery = {
  q: string;
  county: string;
  city: string;
};

export type BusinessResponse = {
  id: string;
  name: string;
  address: string;
};
