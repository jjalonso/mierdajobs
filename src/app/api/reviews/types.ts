export type RequestReviews = {
  gplace_id: string;
  county: string;
  city: string;
  address: string;
  name: string;
  created_at: string;
  user?: string; //v2
  monthly_salary: number;
  working_hours: number;
  working_hours_period: "PER_WEEK" | "PER MONTH";
  contract_fraud?: "NO_CONTRACT" | "HOURS_MISMATCH";
  annual_leave: number;
  comment: string;
};

export type Business = Pick<
  RequestReviews,
  "gplace_id" | "county" | "city" | "address" | "name"
>;

export type Reviews = Pick<
  RequestReviews,
  | "gplace_id"
  | "created_at"
  | "user"
  | "monthly_salary"
  | "working_hours"
  | "working_hours_period"
  | "contract_fraud"
  | "annual_leave"
  | "comment"
>;
