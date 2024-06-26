import { Adapter } from "@auth/core/adapters";
import { MongoDBAdapter, MongoDBAdapterOptions } from "@auth/mongodb-adapter"
import _ from "lodash";
import { MongoClient } from "mongodb";
import { headers } from "next/headers";

import { AvatarEnum } from "./types";

import { recordPlausibleEvent } from "@/lib/plausible";

const ExtendedAdapter = (
  client: Promise<MongoClient>,
  options: MongoDBAdapterOptions = {}
): Adapter => {
  const originalAdapter = MongoDBAdapter(client, options);

  return {
    ...originalAdapter,

    // Extend the createUser method
    // Assign a default avatar in case the user doesnt select one at signup
    async createUser(user) {
      user.image = _.sample(Object.values(AvatarEnum));

      if (originalAdapter?.createUser) {
        await recordPlausibleEvent(
          "account-created",
          { user: user.email },
          {
            "X-Forwarded-For": headers().get("x-forwarded-for") || "",
            "User-Agent": headers().get("user-agent") || ""
          }
        )
        return originalAdapter.createUser(user);
      }

      throw new Error("createUser method not found in original adapter");
    },

  };
}

export { ExtendedAdapter }
