import "server-only";

// imports MongoClient and ServerApiVersion
import { MongoClient, ServerApiVersion } from "mongodb";

// throws error
if(!process.env.DB_URI){
    throw new Error("Mongo URI not found!");
}

// create mongo client 
const client = new MongoClient(process.env.DB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
  },
}); 

// connect mongo client
async function getDB(dbName){
    try{
        await client.connect();  
        console.log("Connected to DB");
        return client.db(dbName);
    }
    catch (error) {
        console.log(error);
    }
};

// data collection
export async function getCollection(collectionName){
    const db = await getDB("next_blog_db");
    if(db) return db.collection(collectionName);

    return null;
};