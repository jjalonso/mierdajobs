"use server";

import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

import schema from "../schema";

import authOptions from "@/app/(auth)/api/auth/_options/options";
import { AvatarEnum } from "@/app/(auth)/api/auth/types";
import { dbPromise } from "@/lib/mongodb/client";

const saveAvatar = async (avatar: AvatarEnum) => {
  const session = await getServerSession(authOptions);
  const { error } = schema.validate({ avatar });
  if (error) throw new Error("Invalid avatar");

  const db = await dbPromise;
  await db.collection("users").updateOne(
    { _id: new ObjectId(session?.user.id) },
    { $set: { image: avatar } }
  )
};

export { saveAvatar }