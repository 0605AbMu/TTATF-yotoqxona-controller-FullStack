import express, { Application, Request, Response, NextFunction, IRouter, response } from "express";
import * as bodyParser from "body-parser";
import userRouter from "../controllers/userController";
import admin from "../controllers/adminController"
import path from "path";




const app: Application = express();
const PORT:number = 100;
const HOST:string = "10.10.10.11";



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use("/", userRouter);
app.use("/admin", admin);


app.use("/", express.static(path.join(__dirname, "..", "views", "userView"), {extensions: ["css", "js"]}))

app.listen(PORT, HOST, () => {
  console.log("[Server]: Server running on " + PORT + "..."  );
});



console.log("$cAbdumannon", "color: red;")