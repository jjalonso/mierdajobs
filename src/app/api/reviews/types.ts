export enum WorkingHoursPeriodEnum {
  PER_WEEK = "PER_WEEK",
  PER_MONTH = "PER_MONTH",
}

export enum ContractFraudEnum {
  NO_CONTRACT = "NO_CONTRACT",
  HOURS_MISMATCH = "HOURS_MISMATCH",
  NO_FRAUD = "NO_FRAUD",
}

export type ReviewsRequest = {
  gplace_id: string;
  monthly_salary: number;
  working_hours: number;
  working_hours_period: WorkingHoursPeriodEnum;
  contract_fraud?: ContractFraudEnum;
  annual_leave: number;
  comment: string;
};

export type ReviewsDB = ReviewsRequest & {
  created_at: string;
};
