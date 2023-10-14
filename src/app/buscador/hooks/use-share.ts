import _ from "lodash";
import { useCallback } from "react";

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

  const canShare = !_.isUndefined(navigator?.share)

  return { sharePage, canShare };
};

export { useShare }
export type { UseShareReturn }
