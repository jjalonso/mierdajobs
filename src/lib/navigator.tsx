export const hasNavigatorFeature = (feature: string): boolean => {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return false;
  }

  return feature in navigator;
};
