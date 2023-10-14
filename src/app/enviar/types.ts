import { ContractFraudEnum, WorkingHoursPeriodEnum } from "@/app/api/reviews/types"
import { IndexedName } from "@/app/api/types"

interface ContractFraud extends IndexedName {
  id: ContractFraudEnum
}
interface WorkingHoursPeriod extends IndexedName {
  id: WorkingHoursPeriodEnum
}

interface ReviewFormDirtyValues {
  monthlySalary: string,
  workingHours: string,
  workingHoursPeriod: IndexedName,
  contractFraud?: string,
  annualLeave: string,
  comment: string
}

interface ReviewFormValidValues {
  monthlySalary: number,
  workingHours: number,
  workingHoursPeriod: IndexedName,
  contractFraud?: ContractFraudEnum,
  annualLeave: number,
  comment: string
}

export type { ReviewFormDirtyValues, ReviewFormValidValues, ContractFraud, WorkingHoursPeriod }
export { WorkingHoursPeriodEnum, ContractFraudEnum }