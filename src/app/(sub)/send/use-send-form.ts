
import querystring from "querystring";

import { useTransition } from "react";
import React, { useState } from "react";

import { sendReview } from "@/app/(sub)/send/data/actions";
import { ActionResponse } from "@/app/types";

interface UseSendFormReturn {
  onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isPending: boolean;
  isFormSubmitted: boolean;
  errors: Record<string, string>;
  backUrl: string;
}

const useSendForm = (): UseSendFormReturn => {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState({});
  const [backUrl, setBackUrl] = useState("");
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});

    startTransition(async () => {
      const formData = new FormData(event.currentTarget);
      const response = await sendReview(formData)

      if (response.code === 400) {
        // Server action Error
        setErrors(response.data as ActionResponse)
      } else {
        // Server action  OK
        const responseData = response.data as Record<string, string>
        setBackUrl(`/reviews?${querystring.stringify(responseData)}`)
        setFormSubmitted(true)
      }
    });
  }

  return {
    onFormSubmit,
    isPending,
    isFormSubmitted,
    errors,
    backUrl
  };
};

export { useSendForm }