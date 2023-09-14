import {
  BusinessResponse,
  GooglePlaceApi,
} from "@/app/api/retrieve-business/type";

type Record = {
  [key: string]: any;
};

type ResultGooglePlaceApi = GooglePlaceApi["results"][0];

type TypeRequest = "county" | "city";

export type {
  BusinessResponse,
  GooglePlaceApi,
  Record,
  ResultGooglePlaceApi,
  TypeRequest,
};
