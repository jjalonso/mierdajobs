import { ObjectId } from "mongodb";

import { AvatarEnum } from "./auth/types";

import { dbPromise } from "@/lib/mongodb/client";

const saveAvatar = async (user: string, avatar: AvatarEnum) => {

  const db = await dbPromise;
  await db.collection("users").updateOne(
    { _id: new ObjectId(user) },
    { $set: { image: avatar } }
  )
};

export default saveAvatar;