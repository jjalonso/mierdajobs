import { Adapter, AdapterUser } from "@auth/core/adapters";
import { MongoDBAdapter, MongoDBAdapterOptions } from "@auth/mongodb-adapter"
import { MongoClient } from "mongodb";
import { UserImageEnum } from "./types";

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
      user.image = UserImageEnum.AVATAR_1;

      if (originalAdapter?.createUser) {
        return originalAdapter.createUser(user);
      } else {
        throw new Error("createUser method not found in original adapter");
      }
    },

  };
}

export { ExtendedAdapter }
