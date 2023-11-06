import { ContractFraudEnum, WorkingHoursPeriodEnum } from "@/app/api/_reviews/types";
import { IndexedName } from "@/app/api/types";

interface IndexedWorkingHoursPeriod extends IndexedName {
  id: WorkingHoursPeriodEnum
}

interface IndexedContractFraud extends IndexedName {
  id: ContractFraudEnum
}

export type { IndexedContractFraud, IndexedWorkingHoursPeriod }
