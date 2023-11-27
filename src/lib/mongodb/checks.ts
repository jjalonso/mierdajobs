import { reviews } from "./collections";

export const hasUserSubmittedReview = async (userId: string, place_id: string) => {
  // Check if user already submitted a review for this business
  const cReviews = await reviews();
  const existingReview = await cReviews.findOne({
    user: userId,
    place_id,
    disabled: { $ne: true }
  });
  return !!existingReview
}