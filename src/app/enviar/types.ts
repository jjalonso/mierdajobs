import { GoogleBusinesses } from "../api/get-google-businesses/types"

import { ContractFraudEnum, WorkingHoursPeriodEnum } from "@/app/api/reviews/types"
import { IndexedName } from "@/app/api/types"

interface ContractFraud extends IndexedName {
  id: ContractFraudEnum
}
interface WorkingHoursPeriod extends IndexedName {
  id: WorkingHoursPeriodEnum
}

interface ReviewFormDirtyValues {
  business: string,
  monthlySalary: string,
  workingHours: string,
  workingHoursPeriod: IndexedName,
  contractFraud?: string,
  annualLeave: string,
  comment: string
}

interface ReviewFormValidValues {
  business: GoogleBusinesses,
  monthlySalary: number,
  workingHours: number,
  workingHoursPeriod: IndexedName,
  contractFraud?: ContractFraudEnum,
  annualLeave: number,
  comment: string
}

export type { ReviewFormDirtyValues, ReviewFormValidValues, ContractFraud, WorkingHoursPeriod }
export { WorkingHoursPeriodEnum, ContractFraudEnum }