import dotenv from "dotenv";
import { Db, MongoClient, ServerApiVersion } from "mongodb";
import mongoDbIntl from "../../config/locale/be/mongodb/es.json";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI ?? "", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connectDatabaseMongoDB = async () => {
  try {
    await client.connect();
    const db: Db = client.db(process.env.MONGODB_DATABASE_DEV);
    return db;
  } catch (error) {
    return {
      message: mongoDbIntl["mierdajobs.mongodb.connection.error"],
      error,
    };
  }
};

export const disconnectDatabaseMongoDB = async () => {
  try {
    await client.close();
  } catch (error) {
    return {
      message: mongoDbIntl["mierdajobs.mongodb.disconnection.error"],
      error,
    };
  }
};
