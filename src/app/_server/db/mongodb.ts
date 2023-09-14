import { Db, MongoClient, ServerApiVersion } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI ?? "", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connectDB = async () => {
  await client.connect();
  const db: Db = client.db(process.env.MONGODB_DATABASE);
  return db;
};

export const disconnectDB = async () => await client.close();
