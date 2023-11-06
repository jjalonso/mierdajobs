import _ from "lodash";
import React from "react";

import Paper from "@/components/paper";

const Loading = () =>
  <div className="animate-pulse">
    <div className="mb-5 mt-16 flex items-end justify-between py-6">
      <div className="flex w-1/2 flex-col gap-y-4 ">
        <div className="mb-2 flex h-6 w-52 rounded-full bg-gray-light"></div>
        <div className="h-2 w-28 rounded-full bg-gray-light"></div>
      </div>
      <div className="flex grow flex-col items-end gap-y-4">
        <div className="h-6 w-28 rounded-full bg-gray-light"></div>

      </div>
    </div>

    <Paper className="flex flex-col items-center gap-4">
      <span className="sr-only">Loading...</span>
      <div
        role="status"
        className="h-full w-full divide-y divide-gray-light"
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
  </div>

export default Loading;