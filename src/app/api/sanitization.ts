import sanitizeHtml from "sanitize-html";
import xss from "xss";

interface SanitizeHtmlInputParams {
  [key: string]: string;
}

const OPTIONS_SANITIZER = {
  allowedTags: [],
  allowedAttributes: {},
  allowedStyles: {},
  allowedScriptDomains: [],
  allowVulnerableTags: false
};

export const sanitizeHtmlInput = (params: SanitizeHtmlInputParams) =>
  Object.fromEntries(
    Object.entries(params).map(([key, value]) => [
      key,
      sanitizeHtml(value, OPTIONS_SANITIZER)
    ])
  );

export const sanitizeXssInput = (params: Record<string, string>) => {
  let result: boolean = false;

  Object.values(params).forEach((value) => {
    if (xss(value) === value) {
      result = true;
    }
  });

  return result;
};
