import { WorkingHoursPeriod, WorkingHoursPeriodEnum } from "./types";

const workingHoursPeriodValues: WorkingHoursPeriod[] = [
  {
    id: WorkingHoursPeriodEnum.PER_WEEK,
    name: "Por semana"
  },
  {
    id: WorkingHoursPeriodEnum.PER_MONTH,
    name: "Por mes"
  }
];

const MIN_NUMBER_RULE = (v: number) => ({
  min: {
    value: v,
    message: `Mínimo ${v}`
  }
})

const MAX_NUMBER_RULE = (v: number) => ({
  max: {
    value: v,
    message: `Máximo ${v}`
  }
})

const REQUIRED_RULE = {
  required: "Campo requerido"
}

export { workingHoursPeriodValues, REQUIRED_RULE, MIN_NUMBER_RULE, MAX_NUMBER_RULE };