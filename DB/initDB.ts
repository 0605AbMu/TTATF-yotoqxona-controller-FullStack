import * as mongodb from "mongodb";
import {MongoClient, MongoError} from "mongodb"



const client:MongoClient =  new  mongodb.MongoClient("mongodb://127.0.0.1:27017");

client.connect()
.then(res=>{
    console.log("DataBase ulandi");
}) 
.catch((err:MongoError)=>{
    console.error("MongoDB ga ulanib bo'lmadi.\nError Code: " + err.code + "\nError Message: " + err.errmsg);
})

export default client;


