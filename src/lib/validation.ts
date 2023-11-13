import { ValidationError } from "joi";
import _ from "lodash";

export const ValidationErrorToObject = (error: ValidationError) =>
  error.details.reduce((acc: Record<string, string>, { message, path }) => {
    const key = path.join(".");
    if (!_.has(acc, key)) {
      _.set(acc, key, message);
    }
    return acc;
  }, {});

export const customValidationMessages = {
  "any.required": "Campo requerido",
  "string.base": "Solo se permite texto",
  "number.base": "Debe ser un numero",

  "string.empty": "Campo requerido",
  "string.min": "Minimo {#limit} caracteres",
  "string.max": "Maximo {#limit} caracteres",

  "number.min": "Minimo {#limit}",
  "number.max": "Maximo {#limit}",
};