export const sortListAlphabetically = (
  a: Record<string, string>,
  b: Record<string, string>
) => a.name.localeCompare(b.name, "es", { sensitivity: "accent" });
