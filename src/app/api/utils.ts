export const sortListAlphabetically = (
  a: Record<string, string>,
  b: Record<string, string>
) => a.name.localeCompare(b.name, "es", { sensitivity: "accent" });

export const serializeIndexedName = (
  data: Record<string, string>[],
  idKey: string,
  nameKey: string
) =>
  data
    .map((item) => ({
      id: item[idKey],
      name: item[nameKey],
    }))
    .sort(sortListAlphabetically);

export const parseParams = (url: string) => {
  const { searchParams } = new URL(url);
  return searchParams;
};
