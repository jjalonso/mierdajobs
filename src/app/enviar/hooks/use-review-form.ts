import { UseFormReturn, useForm } from "react-hook-form";

import { ContractFraudEnum, ReviewFormDirtyValues, ReviewFormValidValues, WorkingHoursPeriodEnum } from "../types";
import { workingHoursPeriodValues } from "../values";

import { insertReview } from "@/app/api/reviews/actions";

interface UseReviewFormReturn {
  form: UseFormReturn<ReviewFormDirtyValues, void, ReviewFormValidValues>,
  onFormSubmit: () => void,
}

const UseReviewForm = (GPlaceId: string): UseReviewFormReturn => {
  const form = useForm<ReviewFormDirtyValues, void, ReviewFormValidValues>({
    mode: "onBlur",
    defaultValues: {
      monthlySalary: "",
      workingHours: "",
      workingHoursPeriod: workingHoursPeriodValues[0],
      contractFraud: "",
      annualLeave: "",
      comment: ""
    }
  })

  const onFormSubmit = form.handleSubmit(async values => {
    const {
      monthlySalary,
      workingHours,
      workingHoursPeriod,
      contractFraud,
      annualLeave,
      comment
    } = values
    try {
      await insertReview({
        gplace_id: GPlaceId,
        monthly_salary: Number(monthlySalary),
        working_hours: Number(workingHours),
        working_hours_period: workingHoursPeriod.id as WorkingHoursPeriodEnum,
        contract_fraud: contractFraud === ContractFraudEnum.NO_FRAUD ? undefined : contractFraud,
        annual_leave: Number(annualLeave),
        comment: comment
      })
    } catch (error) {
      // TODO: Implement toasts
      console.error(error)
    }
  })

  return {
    form,
    onFormSubmit
  }
}

export { UseReviewForm };
export type { UseReviewFormReturn };  