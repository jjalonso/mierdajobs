import { ContractFraudEnum, WorkingHoursPeriodEnum } from "@/app/(sub)/types";
import { IndexedName } from "@/app/(sub)/search/api/types";

interface IndexedWorkingHoursPeriod extends IndexedName {
  id: WorkingHoursPeriodEnum
}

interface IndexedContractFraud extends IndexedName {
  id: ContractFraudEnum
}

export type { IndexedContractFraud, IndexedWorkingHoursPeriod }
