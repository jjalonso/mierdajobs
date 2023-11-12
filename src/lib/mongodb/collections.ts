import { Collection, Document } from "mongodb";
import { User } from "next-auth";

import { dbPromise } from "./client";

import { ReviewDB } from "@/app/(sub)/types";

const collection = async <T extends Document>(collectionName: string):
  Promise<Collection<T>> => {
  const db = await dbPromise;
  return db.collection<T>(collectionName);
}

export const users = () => collection<User>("users");
export const reviews = () => collection<ReviewDB>("reviews");