import _ from "lodash";
import React from "react";

import Paper from "@/components/paper";

const Loading = () =>
  <Paper className="mt-40 flex flex-col items-center gap-4 text-center text-gray-dark">
    <span className="sr-only">Loading...</span>
    <div
      role="status"
      className="h-full w-full animate-pulse divide-y divide-gray-light"
    >
      {_.times(3, () => (
        <div className="flex items-start justify-between py-6">
          <div className="flex w-1/2 flex-col gap-y-4 ">
            <div className="mb-2 flex h-6 w-1/2 rounded-full bg-gray"></div>
            <div className="h-2 w-full rounded-full bg-gray"></div>
            <div className="h-2 w-2/3 rounded-full bg-gray"></div>
          </div>
          <div className="flex grow flex-col items-end gap-y-4">
            <div className="mb-2 h-6 w-1/5 rounded-full bg-gray"></div>
            <div className="h-2 w-1/3 rounded-full bg-gray"></div>
          </div>
        </div>
      ))}
    </div>
  </Paper>

export default Loading;