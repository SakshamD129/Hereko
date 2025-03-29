import { MongoClient, ServerApiVersion } from "mongodb";
const URI = process.env.MONGO_URI;

if (!URI) throw new Error("Please add your Mongo URI to .env.local");

const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
    tls: true,
});
let clientPromise;

if (process.env.NODE_ENV !== "production") {
    if (!global._mongoClientPromise) {
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
}
else {
    clientPromise = client.connect();
}

export default clientPromise;