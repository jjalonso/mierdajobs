import _ from "lodash";
import moment from "moment";
import { useMemo } from "react";
import "moment/locale/es";

import { contractFraudValues } from "../values";

import { Review } from "@/app/api/_reviews/get-reviews/types";

moment.locale("es");

interface AdaptedReview extends Omit<Review, "contract_fraud"> {
  avatar: string,
  contract_fraud: { title: string, description: string }
};

const useReviewAdapter = (review: Review): AdaptedReview => {
  const data = useMemo(() => {
    return {
      ...review,
      created_at: moment(review.created_at).format("MMMM YYYY"),
      avatar: `/avatars/avatar-${_.random(1, 12)}.png`,
      contract_fraud: contractFraudValues[review.contract_fraud]
    }
  }, [review]);

  return data;
};

export default useReviewAdapter;
