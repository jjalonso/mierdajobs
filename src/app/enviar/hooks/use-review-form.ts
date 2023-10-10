import { useRouter } from "next/navigation";
import { UseFormReturn, useForm } from "react-hook-form";

import { ContractFraudEnum, ReviewFormDirtyValues, ReviewFormValidValues, WorkingHoursPeriodEnum } from "../types";
import { workingHoursPeriodValues } from "../values";

import { UseBusinessFieldReturn, useBusinessField } from "./use-business-field";

import { insertReview } from "@/app/api/reviews/actions";

interface UseReviewFormReturn {
  form: UseFormReturn<ReviewFormDirtyValues, void, ReviewFormValidValues>,
  businessField: UseBusinessFieldReturn
  onFormSubmit: () => void,
}

const UseReviewForm = (): UseReviewFormReturn => {
  const router = useRouter()
  const form = useForm<ReviewFormDirtyValues, void, ReviewFormValidValues>({
    mode: "onBlur",
    defaultValues: {
      business: "",
      monthlySalary: "",
      workingHours: "",
      workingHoursPeriod: workingHoursPeriodValues[0],
      contractFraud: "",
      annualLeave: "",
      comment: ""
    }
  })

  const businessField = useBusinessField()

  const onFormSubmit = form.handleSubmit(async (values) => {
    const {
      business,
      monthlySalary,
      workingHours,
      workingHoursPeriod,
      contractFraud,
      annualLeave,
      comment
    } = values
    // Send Post Request and redirect if successful
    try {
      await insertReview({
        gplace_id: business.gplace_id,
        monthly_salary: Number(monthlySalary),
        working_hours: Number(workingHours),
        working_hours_period: workingHoursPeriod.id as WorkingHoursPeriodEnum,
        contract_fraud: contractFraud === ContractFraudEnum.NO_FRAUD ? undefined : contractFraud,
        annual_leave: Number(annualLeave),
        comment: comment
      })
      router.push(`/enviar?sent=${business.gplace_id}`)
    } catch (error) {
      console.error(error)
    }
  })

  return {
    form,
    onFormSubmit,
    businessField
  }
}

export { UseReviewForm };
export type { UseReviewFormReturn };  