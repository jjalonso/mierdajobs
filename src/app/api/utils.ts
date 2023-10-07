import { NextResponse } from "next/server";

export const sortListAlphabetically = (
  a: Record<string, string>,
  b: Record<string, string>
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
