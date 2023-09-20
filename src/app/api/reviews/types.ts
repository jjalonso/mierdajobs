export type DBReviews = Record<string, string> & {
  county: string;
  city: string;
  business: string;
  monthlySalary: number;
  workingHoursPerWeek: number;
  contractFraud?: "NO_CONTRACT" | "HOURS_MISMATCH";
  annualLeave: number;
  comment: string;
};
