import { UseFormReturn, useForm } from "react-hook-form";

import { ReviewFormDirtyValues, ReviewFormValidValues } from "../types";
import { workingHoursPeriodValues } from "../values";

import { sendReview } from "@/app/api/_reviews/send-review/actions";
import { WorkingHoursPeriodEnum } from "@/app/api/_reviews/types";

interface UseReviewFormReturn {
  form: UseFormReturn<ReviewFormDirtyValues, void, ReviewFormValidValues>;
  onFormSubmit: () => void;
}

const UseReviewForm = (gplace: string): UseReviewFormReturn => {
  const form = useForm<ReviewFormDirtyValues, void, ReviewFormValidValues>({
    mode: "onBlur",
    defaultValues: {
      monthlySalary: "",
      workingHours: "",
      workingHoursPeriod: workingHoursPeriodValues[0],
      contractFraud: "",
      annualLeave: "",
      comment: "",
    },
  });

  const onFormSubmit = form.handleSubmit(async (values) => {
    const {
      monthlySalary,
      workingHours,
      workingHoursPeriod,
      contractFraud,
      annualLeave,
      comment,
    } = values;
    try {
      throw new Error("Not implemented");
      await sendReview({
        gplace_id: gplace,
        monthly_salary: Number(monthlySalary),
        working_hours: Number(workingHours),
        working_hours_period: workingHoursPeriod.id as WorkingHoursPeriodEnum,
        contract_fraud: contractFraud,
        annual_leave: Number(annualLeave),
        comment: comment,
      });
    } catch (error: any) {
      // TODO: Implement toasts
      console.error(error);
      form.setError("root.server", {
        type: "server",
        message: error.message,
      })
      throw error;
    }
  });

  return {
    form,
    onFormSubmit,
  };
};

export { UseReviewForm };
export type { UseReviewFormReturn };
