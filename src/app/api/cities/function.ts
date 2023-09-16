const TYPE_KEY: Record<string, string> = {
  id: "code_province",
  name: "name",
};

export const serializerParamsCity = (request: Request) => {
  let params: Record<string, string> = {};
  const { searchParams } = new URL(request.url);

  if (searchParams.size === 0) {
    return undefined;
  } else {
    searchParams.forEach((value: string, key: string) => {
      key = TYPE_KEY[key];
      params = { ...params, [key]: value };
    });

    return params;
  }
};

export const serializerResponseCity = (response: Record<string, string>[]) => {
  const serializedCity = response.map((item: Record<string, string>) => ({
    id: item.code,
    name: item.name,
  }));

  return serializedCity;
};
