import express, { Router, Request, Response, NextFunction } from "express";
import Joi, { object, ValidationResult } from "joi";
import path from "path";
import session from "express-session";

import { AddRoomSchema, PasportSchema, UpdateRoomSchema } from "../schemas/adminSchema";
import * as students from "../DB/students";
import * as rooms from "../DB/roomDB";
import * as history from "../DB/historyDB";
import { HistorySchema } from "../schemas/historySchema";
const admin = Router();



// express.static(path.join(__dirname, "..", "views", "adminView"), {extensions: ["css", "js"]})
// admin.use("/", )
admin.use(session({
  secret: "express session",
  cookie: {
    secure: true,
    maxAge: 1000 * 60 * 60 * 1,
  },
  name: "session",
  resave: true,
  saveUninitialized: true
}))


const adminValidator = (req: Request, res: Response, next: NextFunction) => {
  if (req.sessionID) {
    next();
  } else {
    res.redirect("/login")
  }
};



admin.use("/", adminValidator, express.static(path.join(__dirname, "..", "views", "adminView"), { extensions: ["css", "js"] }));
admin.use("/rooms", adminValidator, express.static(path.join(__dirname, "..", "views", "roomsView", "Rooms", "compiled", "www"), { extensions: ["css", "js"] }));




admin.get("/student/:pasport", async (req: Request, res: Response, next: NextFunction) => {
  const resultOfValidate: Joi.ValidationResult = PasportSchema.validate(req.params.pasport);
  if (resultOfValidate.error) {
    const { message, details } = resultOfValidate.error;
    res.status(400).json({ error: true, code: 400, message: message, details: details })
  } else {
    const pp = await students.getStudentByPasport(req.params.pasport);
    if (pp) {





      res.status(200).json({
        code: 200, data: {
          "Talaba ID": pp["Talaba ID"],
          FIO: pp.FIO,
          "Pasport": pp["Pasport"],
          "Tug‘ilgan sana": pp["Tug‘ilgan sana"],
          kursi: pp["Talaba kursi"]


        }
      }).end();
    } else {
      res.status(404).json({ error: true, code: 404, message: "Topilmadi!" }).end();
    }

  }
})



// Login Data
admin.post("/login", (req: Request, res: Response, next: NextFunction) => {
})


// Register data
admin.post("/register", (req: Request, res: Response, next: NextFunction) => {
})


// Room Actions

admin.post("/rooms/add", async (req: Request, res: Response, next: NextFunction) => {
  const validateResult: ValidationResult = AddRoomSchema.validate(req.body);
  req.body.students = [];
  for (let i = 0; i < req.body.capacity; i++) {
    req.body.students.push(-1);
  }
  if (validateResult.error) {
    res.status(400).json(validateResult.error);
  } else {
    try {
      const result = await rooms.addRoom(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: "Bazaga qo'shib bo'lmadi" });
    }
  }
})

admin.put("/rooms/update", async (req: Request, res: Response, next: NextFunction) => {

console.log("updating data", req.body)


  if (req.body._id == undefined || req.body.data == undefined) {
    return res.status(400).json({ code: 400, message: "_id yoki ma'lumotlar berilmagan" });
  }

  const result: Joi.ValidationResult = UpdateRoomSchema.validate(req.body.data);

  if (result.error) {
    // console.log(result.error);
    return res.status(400).json({ code: 400, message: result.error.message });
  }

  

  const updateResult = await rooms.updateById(req.body._id, req.body.data);
  if (updateResult == null) return res.status(404).json({ code: 404, message: "Bu Id ga ega xona topilmadi!" });
  res.status(200).json({ code: 200, data: updateResult });
})





admin.put("/rooms/updateMore", async (req: Request, res: Response, next: NextFunction) => {

  const [room1, room2] = req.body;

console.log("room1", room1, "\nroom2", room2)

  if (!room1 || !room2) {
    res.status(400).json({ code: 400, message: "Bad request" });
  }

  const validateResult1: ValidationResult = UpdateRoomSchema.validate(room1.data);
  const validateResult2: ValidationResult = UpdateRoomSchema.validate(room2.data);
  if (room1._id == null || room1._id == undefined || room1._id == null || room1._id == undefined) {
    return res.status(400).json({ message: "xona _idsi berilmadi" });
  }

  if (validateResult1.error || validateResult2.error) {
    res.status(400).json({ error1: validateResult1, error2: validateResult1 });
  } else {
    try {
      const result1 = await rooms.updateById(room1._id, room1.data);
      const result2 = await rooms.updateById(room2._id, room2.data);
      if (result1 && result2) {
        res.status(200).json({ code: 200, data: { ...result1, ...result2 } });
      } else {
        res.status(501).json({ code: 501, message: "Ma'lumotni yangilab bo'lmadi" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ code: 500, message: "Bazani yangilab bo'lmadi" });
    }
  }
})

admin.delete("/rooms/delete", async (req: Request, res: Response, next: NextFunction) => {
  if (req.body._id == null || req.body._id == undefined) {
    return res.status(400).json({ message: "_id berilmadi" });
  }
  try {
    const result = await rooms.deletById(req.body._id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(501).json({ message: "Ma'lumotni o'chirib bo'lmadi" });
    }

  } catch (error) {
    res.status(500).json({ message: "Ma'lumotni o'chirib bo'lmadi" });
  }

})


admin.get("/rooms/getAll", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allData = await rooms.readAll();
    console.log(allData.length);
    res.status(200).json(allData);
  } catch (error) {
    res.send(500).json({ message: "Ma'lumotlarni olib bo'lmadi" })
  }
})

admin.get("/room/:id", async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params.id);
  if (!req.params.id) {
    res.status(400).json({ code: 400, message: "_id berilmadi" })
  }
  const result = await rooms.getRoomById(req.params.id);
  if (result) {
    res.status(200).json({ code: 200, data: result })
  } else {
    res.status(404).json({ code: 404, message: "Topilmadi!" })
  }


})

// Room Actions #############################

admin.delete("/deleteRoomMember", async (req: Request, res: Response, next: NextFunction) => {

})

admin.post("/addHistory", async (req: Request, res: Response, next: NextFunction) => {



  const result: ValidationResult = HistorySchema.validate(req.body);
  console.log(result.error);
  if (result.error) {
    return res.status(400).json(result.error);
  }
  result.value.date = new Date();

  const dbValue = await history.addToHistory(result.value);

  if (dbValue) {
    res.status(200).json(dbValue);
  } else {
    res.status(500).json({ code: 500, message: "Jarayonni tarixga qo'shishning iloji bo'lmadi" });
  }

})

admin.get("/getAllHistory", async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json((await history.getAllHistory()))
})




export default admin;