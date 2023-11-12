import { ValidationError } from "joi";
import _ from "lodash";
import sanitizeHtml from "sanitize-html";
import sanitizeXss from "xss";

export const parseParams = (url: string) => {
  const { searchParams } = new URL(url);
  return searchParams;
};

export const serializeIndexed = (data: URLSearchParams) => {
  let params: NonNullable<unknown> = {};
  data.forEach((value: string, key: string) => {
    params = { ...params, [key]: value };
  });
  return params;
};

export const sanitize = (value: string) =>
  sanitizeHtml(
    sanitizeXss(value), {
    allowedTags: [],
    allowedAttributes: {},
    allowedStyles: {},
    allowedScriptDomains: [],
    allowVulnerableTags: false
  });

export const sanitizeFormData = (formData: FormData): FormData => {
  const sanitizedFormData = new FormData();
  _.forEach(Array.from(formData.entries()), ([key, value]) => {
    // Sanitize string values only or pass it unchanged
    if (typeof value === "string") sanitizedFormData.append(key, sanitize(value));
    else sanitizedFormData.append(key, value);
  });
  return sanitizedFormData;
}

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