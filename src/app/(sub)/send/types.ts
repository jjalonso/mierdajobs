import { IndexedName } from "@/app/(sub)/search/api/types";
import { ContractFraudEnum, WorkingHoursPeriodEnum } from "@/app/(sub)/types";

interface IndexedWorkingHoursPeriod extends IndexedName {
  id: WorkingHoursPeriodEnum
}

interface IndexedContractFraud extends IndexedName {
  id: ContractFraudEnum
}

export type { IndexedContractFraud, IndexedWorkingHoursPeriod }
