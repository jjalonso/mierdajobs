import {
  BusinessResponse,
  GooglePlaceApi,
} from "@/app/api/retrieve-business/types";

type ResultGooglePlaceApi = GooglePlaceApi["results"][0];

type TypeRequest = "county" | "city";

export type {
  BusinessResponse,
  GooglePlaceApi,
  ResultGooglePlaceApi,
  TypeRequest,
};
