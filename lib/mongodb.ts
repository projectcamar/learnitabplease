import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || process.env.NEXT_PUBLIC_MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env'
  );
}

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

try {
  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    let globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(MONGODB_URI, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    client = new MongoClient(MONGODB_URI, options);
    clientPromise = client.connect();
  }
} catch (error) {
  console.error('MongoDB connection error:', error);
  throw error;
}

export default clientPromise;