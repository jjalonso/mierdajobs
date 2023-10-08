import { IndexedName } from "@/app/api/types"

enum WorkingHoursPeriodEnum {
  PER_WEEK = "PER_WEEK",
  PER_MONTH = "PER_MONTH"
}

enum ContractFraudEnum {
  NO_CONTRACT = "NO_CONTRACT",
  HOURS_MISMATCH = "HOURS_MISMATCH",
  NO_FRAUD = "NO_FRAUD"
}

interface ContractFraud extends IndexedName {
  id: ContractFraudEnum
}
interface WorkingHoursPeriod extends IndexedName {
  id: WorkingHoursPeriodEnum
}

interface ReviewFormValues {
  business: IndexedName | string,
  monthlySalary: number | string,
  workingHours: number | string,
  workingHoursPeriod: WorkingHoursPeriod,
  hasContractFraud?: boolean,
  contractFraud?: ContractFraud | string,
  annualLeave: number | string,
  comment: string
}

export type { ReviewFormValues, ContractFraud, WorkingHoursPeriod }
export { WorkingHoursPeriodEnum, ContractFraudEnum }