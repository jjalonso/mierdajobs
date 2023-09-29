export type GooglePlaceApi = {
  candidates: [
    {
      formatted_address: string;
      name: string;
      place_id: string;
    }
  ];
  status: string;
};
