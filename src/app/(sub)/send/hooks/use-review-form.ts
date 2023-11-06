
import React, { useState } from "react";

import { sendReview } from "@/app/api/_reviews/send-review/actions";
import { ActionResponse } from "@/app/api/types";

interface UseReviewFormReturn {
  onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isFormSubmitting: boolean;
  isFormSubmitted: boolean;
  errors: Record<string, string>;

}

const useReviewForm = (): UseReviewFormReturn => {
  const [errors, setErrors] = useState({});
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors({});
    setFormSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const response = await sendReview(formData)

    if (response.code !== 201) {
      setErrors(response.data as ActionResponse)
      setFormSubmitting(false);
    } else {
      setFormSubmitted(true)
    }
  }

  return {
    onFormSubmit,
    isFormSubmitting,
    isFormSubmitted,
    errors
  };
};

export { useReviewForm }