import { ContractFraudEnum, WorkingHoursPeriodEnum } from "@/app/(sub)/types";

export type IndexedName = {
  id: string;
  name: string;
};

interface IndexedWorkingHoursPeriod extends IndexedName {
  id: WorkingHoursPeriodEnum
}

interface IndexedContractFraud extends IndexedName {
  id: ContractFraudEnum
}

export type { IndexedContractFraud, IndexedWorkingHoursPeriod }
