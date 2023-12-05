import { useCallback, useMemo } from "react";

import { hasNavigatorFeature } from "@/lib/navigator";

interface UseShareReturn {
  sharePage: () => void
  canShare: boolean
}

const useShare = (data: ShareData): UseShareReturn => {
  const sharePage = useCallback(async () => {
    try {
      await navigator.share(data);
    } catch (err) {
      console.error(err);
    }
  }, [data])

  const canShare = useMemo(() => hasNavigatorFeature("share"), []);

  return { sharePage, canShare };
};

export { useShare }
export type { UseShareReturn }
