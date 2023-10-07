export type RequestReviews = {
  gplace_id: string;
  monthly_salary: number;
  working_hours: number;
  working_hours_period: "PER_WEEK" | "PER MONTH";
  contract_fraud?: "NO_CONTRACT" | "HOURS_MISMATCH";
  annual_leave: number;
  comment: string;
};

export type Reviews = Pick<
  RequestReviews,
  | "gplace_id"
  | "monthly_salary"
  | "working_hours"
  | "working_hours_period"
  | "contract_fraud"
  | "annual_leave"
  | "comment"
>;
