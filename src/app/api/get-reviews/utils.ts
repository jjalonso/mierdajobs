import { getGooglePlaceDetailsBusiness } from "@/app/_server/google-place/verbs";
import { ReviewsDTO } from "./types";

export const serializeIndexedReviews = async (
	reviews: any,
	gplace_id: string
) => {
	const gettedDetailsBusiness = await getGooglePlaceDetailsBusiness(gplace_id);
	return {
		name: gettedDetailsBusiness.result.name,
		address: gettedDetailsBusiness.result.formatted_address,
		totalReviews: reviews.length,
		reviews
	} as ReviewsDTO;
};
