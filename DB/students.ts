import { Db, Collection, InsertOneResult, InsertOneModel, ObjectId, ObjectID } from "mongodb";
import * as mongodb from "mongodb";
import { MongoClient, MongoError } from "mongodb"

let stdb: Db;
let students: Collection;


const client: MongoClient = new mongodb.MongoClient("mongodb://127.0.0.1:27017");

client.connect()
    .then(res => {
        stdb = client.db("students");
        students = stdb.collection("students");
        console.log("Studentlar database i ulandi....");
    })
    .catch(error => {
        console.log("Studentlar database siga ulanib bo'lmadi...", error);
    })






export async function getStudentByPasport(s: string) {
    return await students.findOne({ Pasport: s });
}



