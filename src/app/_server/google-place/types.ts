type LengthOffSet = {
  length: number;
  offset: number;
};

type ValueOffSet = {
  offset: number;
  value: string;
};

export type GooglePlaceAutocomplete = {
  predictions: [
    {
      description: string;
      matched_substrings: LengthOffSet[];
      place_id: string;
      reference: string;
      structured_formatting: {
        main_text: string;
        main_text_matched_substrings: LengthOffSet[];
        secondary_text: string;
        secondary_text_matched_substrings: LengthOffSet[];
      };
      terms: ValueOffSet[];
      types: string[];
    }
  ];
  status: string;
};
