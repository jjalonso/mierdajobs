export type ReviewsRequest = {
  gplace_id: string;
  monthly_salary: number;
  working_hours: number;
  working_hours_period: "PER_WEEK" | "PER MONTH";
  contract_fraud?: "NO_CONTRACT" | "HOURS_MISMATCH";
  annual_leave: number;
  comment: string;
};

export type ReviewsDB = ReviewsRequest & {
  created_at: string;
};
