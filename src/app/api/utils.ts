export const sortListAlphabetically = (
  a: Record<string, any>,
  b: Record<string, any>
) => a.name.localeCompare(b.name, "es", { sensitivity: "accent" });

export const parseParams = (url: string) => {
  const { searchParams } = new URL(url);
  return searchParams;
};

export const serializeIndexed = (data: URLSearchParams) => {
  let params: Record<string, string> | {} = {};
  data.forEach((value: string, key: string) => {
    params = { ...params, [key]: value };
  });
  return params;
};
