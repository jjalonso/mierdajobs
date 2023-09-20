export type RequestReviews = {
  county: string;
  city: string;
  gplace_id: string;
  created_at?: string;
  address: string;
  monthly_salary: number;
  working_hours_pw: number;
  contract_fraud?: "NO_CONTRACT" | "HOURS_MISMATCH";
  annual_leave: number;
  comment: string;
  name: string;
};

export type Business = {
  gplace_id: string;
  county: string;
  city: string;
  address: string;
  name: string;
};

export type Reviews = {
  gplace_id: string;
  created_at?: string | undefined;
  user?: string; // to v2
  monthly_salary: number;
  working_hours_pw: number;
  contract_fraud?: "NO_CONTRACT" | "HOURS_MISMATCH";
  annual_leave: number;
  comment: string;
};
