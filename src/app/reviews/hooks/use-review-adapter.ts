import _ from "lodash";
import moment from "moment";
import { useMemo } from "react";
import "moment/locale/es";

import { Review } from "@/app/api/reviews/types";
import { contractFraudObject } from "../values";

moment.locale("es");

type AdaptedReview = Review & { avatar: string };

const useReviewAdapter = (review: Review): AdaptedReview => {
  const data = useMemo(() => {
    return {
      ...review,
      created_at: moment(review.created_at).format("MMMM YYYY"),
      avatar: `/avatar-${_.random(1, 4)}.png`,
      contract_fraud: contractFraudObject[review.contract_fraud]
    }
  }, [review]);

  return data;
};

export default useReviewAdapter;
