import { Db, Collection, InsertOneResult, InsertOneModel, ObjectId, ObjectID } from "mongodb";
import client from "./initDB";
import { TRoom } from "../types/roomTypes";
import { TRoomType } from "../types/userTypes";

let yotoqxona: Db;
let rooms: Collection;
try {
    yotoqxona = client.db("Yotoqxona");
     rooms = yotoqxona.collection("rooms");
    console.log("Xonalar database i ulandi....");
} catch (error) {
    console.log("Xonalar database siga ulanib bo'lmadi...", error);
}


export async function addRoom(data: TRoom) {
    try {
        data._id = (await rooms.insertOne(data)).insertedId;
        return data
    } catch (error: any) {
        throw new Error(error);
    }
}


export async function readAll() {
    return (await rooms.find().toArray());

}
export async function updateById(__id: string, data: Object) {
    //const result = await rooms.updateOne({_id: __id}, {$set:data});
    return (await rooms.findOneAndUpdate({ _id: new ObjectID(__id) }, { $set: data })).value;
}

export async function deletById(__id: string) {
    return (await rooms.findOneAndDelete({ _id: new ObjectID(__id) }));
}

export async function getRoomById(__id: string) {
    return (await rooms.findOne({ _id: new ObjectID(__id) }));
}









