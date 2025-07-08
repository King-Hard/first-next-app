// access to server only
import "server-only";

// first imports MongoClient and ServerApiVersion
import { MongoClient, ServerApiVersion } from "mongodb";

// second check the DB_URI kung may laman
if(!process.env.DB_URI){
    console.log("DB URI not found")
};

// third create client
const client = new MongoClient(process.env.DB_URI, {
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// fourth connect Database
async function getDB(dbname){
    await client.connect();
    console.log("Database connected");
    return client.db(dbname);
};

//fifth data collection
export async function getCollection(collectionName){
    const db = await getDB("next_blog_db");
    if(db) return db.collection(collectionName);

    return null;
};