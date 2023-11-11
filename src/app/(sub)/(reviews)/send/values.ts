import { WorkingHoursPeriodEnum } from "../api/types";

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

export { workingHoursPeriodValues };