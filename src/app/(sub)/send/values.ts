import { WorkingHoursPeriodEnum } from "../../api/_reviews/types";

import { IndexedWorkingHoursPeriod } from "./types";

const workingHoursPeriodValues: IndexedWorkingHoursPeriod[] = [
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

const MAX_LENGTH_RULE = (v: number) => ({
  maxLength: {
    value: v,
    message: `Máximo ${v} caracteres`
  }
})

const MIN_LENGTH_RULE = (v: number) => ({
  minLength: {
    value: v,
    message: `Minimo ${v} caracteres`
  }
})

const ONLY_NUMBER_RULE = {
  pattern: {
    value: /^[0-9]*$/,
    message: "Solo números"
  }
}

const REQUIRED_RULE = {
  required: "Campo requerido"
}

export { workingHoursPeriodValues, REQUIRED_RULE, MIN_NUMBER_RULE, MAX_NUMBER_RULE, MIN_LENGTH_RULE, MAX_LENGTH_RULE, ONLY_NUMBER_RULE };