import { Db, MongoClient, ServerApiVersion } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI ?? "", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connectDatabaseMongoDB = async () => {
  await client.connect();
  const db: Db = client.db(process.env.MONGODB_DATABASE_DEV);
  return db;
};

export const disconnectDatabaseMongoDB = async () => await client.close();
