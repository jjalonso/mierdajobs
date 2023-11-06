
import React, { useState } from "react";

import { sendReview } from "@/app/api/_reviews/send-review/actions";
import { ActionResponse } from "@/app/api/types";

interface UseReviewFormReturn {
  onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  errors: Record<string, string>;
  isFormSubmitting: boolean;
  isFormSubmitted: boolean;

}

const useReviewForm = (): UseReviewFormReturn => {
  const [errors, setErrors] = useState({});
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});
    setFormSubmitting(true);
    try {
      const formData = new FormData(event.currentTarget);
      const response = await sendReview(formData)
      console.log("response", response)
      if (response.code !== 201) {
        setErrors(response.data as ActionResponse)
      } else {
        setFormSubmitted(true)
      }
    }
    catch (e: unknown) {
      console.error(e);
      setErrors({ global: "Tuvimos un problema... intentalo de nuevo" })
    }
    setFormSubmitting(false);
  }

  return {
    onFormSubmit,
    errors,
    isFormSubmitting,
    isFormSubmitted
  };
};

export { useReviewForm }