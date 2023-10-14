import { useCallback, useState } from "react";

interface UseSearchFieldReturn {
  isTouched: boolean;
  onFocus: () => void;
}

export const useSearchField = (): UseSearchFieldReturn => {
  const [isTouched, setTouched] = useState<boolean>(false);

  const onFocus = useCallback(() => setTouched(true), []);

  return {
    isTouched,
    onFocus
  };
};
