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
