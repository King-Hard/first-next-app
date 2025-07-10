import "server-only";

import { MongoClient, ServerApiVersion } from "mongodb";
import { error } from "console";

//first thing wee need to do is to validate the env file if we have a DB URI
if(!process.env.DB_URI){
    throw new Error("DB URI not found");
};

// second thing we need to is to create client
const client = new MongoClient(process.env.DB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// third thing we need to do is to connect the client in our database
export async function getDB(dbName){
    try{
        await client.connect();
        console.log("Database connected!");
        return client.db(dbName);
    }
    catch (error){
        console.log(error);
    }
};

// last thing weed to do is to collect the data 
export async function getCollection(collectionName){
    const db = getDB("second_next_app");
    if(db) return db.collection(collectionName);

    return null;
};