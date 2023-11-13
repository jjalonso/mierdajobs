export type Business = {
  name: string;
  address: string[];
  place_id: string;
};

export type GetBusinessesResponse = Business[];