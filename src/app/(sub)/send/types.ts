import { ContractFraudEnum, WorkingHoursPeriodEnum } from "@/app/api/_reviews/types";
import { IndexedName } from "@/app/api/types";

interface IndexedWorkingHoursPeriod extends IndexedName {
  id: WorkingHoursPeriodEnum
}

interface IndexedContractFraud extends IndexedName {
  id: ContractFraudEnum
}

interface ReviewFormDirtyValues {
  monthlySalary: string,
  workingHours: string,
  workingHoursPeriod: IndexedWorkingHoursPeriod,
  contractFraud: string,
  annualLeave: string,
  comment: string
}

interface ReviewFormValidValues {
  monthlySalary: number,
  workingHours: number,
  workingHoursPeriod: IndexedWorkingHoursPeriod,
  contractFraud: ContractFraudEnum,
  annualLeave: number,
  comment: string
}

export type { ReviewFormDirtyValues, ReviewFormValidValues, IndexedContractFraud, IndexedWorkingHoursPeriod }
