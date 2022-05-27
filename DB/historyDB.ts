import { Db, Collection, InsertOneResult, InsertOneModel, ObjectId, ObjectID, MongoError } from "mongodb";
import client from "./initDB";
import { THistory } from "../types/historyTypes";

let yotoqxona: Db;
let history: Collection;

try {
    yotoqxona = client.db("Yotoqxona");
    history = yotoqxona.collection("history");
    console.log("Tarix database i ulandi....");
} catch (error) {
    console.log("Tarix database siga ulanib bo'lmadi...", error);
}


export async function addToHistory(data: THistory) {
    return await history.findOne({_id: await (await history.insertOne(data)).insertedId});
}
export async function getAllHistory() {
    return await history.find().toArray();
}
