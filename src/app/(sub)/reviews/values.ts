import { ContractFraudEnum } from "../../api/_reviews/types";

export const contractFraudValues = {
  [ContractFraudEnum.NO_CONTRACT]: {
    title: "No hay contrato",
    description: "La jornada se realiza sin tener contrato de trabajo."
  },
  [ContractFraudEnum.HOURS_MISMATCH]: {
    title: "Defrauda con las horas",
    description: "La jornada difiere de las horas que cotiza el contrato."
  },
  [ContractFraudEnum.NO_FRAUD]: {
    title: "El contrato es correcto",
    description: "La jornada corresponde con las condiciones que el contrato indica."
  }
}