import { ContractFraudEnum } from "../api/reviews/types";

export const contractFraudObject = {
  [ContractFraudEnum.NO_CONTRACT]: "No hay contrato",
  [ContractFraudEnum.HOURS_MISMATCH]: "Las horas de contrato no coinciden",
  [ContractFraudEnum.NO_FRAUD]: "El contrato es correcto"
}