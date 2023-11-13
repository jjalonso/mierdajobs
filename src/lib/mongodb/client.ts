import { MongoClient, Db } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;
let dbPromise: Promise<Db>;

// Extend the global type with a _mongoClientPromise property for development hot-reloading
type CustomNodeJSGlobal = typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
  _dbPromise?: Promise<Db>;
};

if (process.env.NODE_ENV === "development") {
  const globalWithMongo = global as CustomNodeJSGlobal;

  // Only create a new MongoClient if one hasn't been created yet
  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }

  // Use the existing client promise or create a new db promise if necessary
  clientPromise = globalWithMongo._mongoClientPromise;
  dbPromise = globalWithMongo._dbPromise ?? clientPromise.then(c => c.db(process.env.MONGODB_DATABASE));

  // Store the dbPromise back in the global object if it was just created
  if (!globalWithMongo._dbPromise) {
    globalWithMongo._dbPromise = dbPromise;
  }
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
  dbPromise = clientPromise.then(c => c.db(process.env.MONGODB_DATABASE));
}

// Export both the MongoClient promise and the Db promise
export { clientPromise, dbPromise };
