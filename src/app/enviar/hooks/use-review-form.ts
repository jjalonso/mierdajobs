import { useMemo } from "react";
import { UseFormReturn, useForm } from "react-hook-form";

import { ReviewFormValues } from "../types";
import { workingHoursPeriodValues } from "../values";

import { UseBusinessFieldReturn, useBusinessField } from "./use-business-field";

interface UseReviewFormReturn {
  form: UseFormReturn<ReviewFormValues>,
  onFormSubmit: () => void,
  businessField: UseBusinessFieldReturn
}

const UseReviewForm = (): UseReviewFormReturn => {

  const form = useForm<ReviewFormValues>({
    mode: "onBlur",
    defaultValues: {
      business: "",
      monthlySalary: "",
      workingHours: "",
      workingHoursPeriod: workingHoursPeriodValues[0],
      hasContractFraud: false,
      contractFraud: "",
      annualLeave: "",
      comment: ""
    }
  })

  const businessField = useBusinessField(form)

  const onFormSubmit = useMemo(() => form.handleSubmit((values) => {
    // Send Post Request
    console.log("TODO: Submit form", values)
  }
  ), [form])

  return {
    form,
    onFormSubmit,
    businessField
  }
}

export { UseReviewForm };
export type { UseReviewFormReturn };  