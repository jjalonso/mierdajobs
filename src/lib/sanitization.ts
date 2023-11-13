import _ from "lodash";
import sanitizeHtml from "sanitize-html";
import sanitizeXss from "xss";

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
