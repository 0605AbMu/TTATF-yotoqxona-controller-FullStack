import { Router, Request, Response, NextFunction } from "express";
import Joi from "joi";
import path from "path";
import { FloorOrderSchema } from "../schemas/userSchema";
import { TRoomType } from "../types/userTypes";
import * as rooms from "../DB/roomDB";
const userRouter = Router();

const floorCount: Number = 10;


// getFloorsCount Qavatlar sonini qaytaradi
userRouter.get(
  "/getFloorsCount",
  (req: Request, res: Response, next: NextFunction) => {
    if (floorCount <= 0) {
      res
        .status(404)
        .json({ code: 404, msg: `[Error]: Qavatlar soni noma'lum` });
    } else {
      res.status(200).json({ code: 200, floorCount: floorCount });
    }
  }
);

// /floor/:order/ Qavatlar bo'yicha ma'lumotlarni saralab qaytaradi
userRouter.get(
  "/floor/:order",
 async (req: Request, res: Response, next: NextFunction) => {
    if (!isNaN(parseInt(req.params.order))) {
      const vl: Joi.ValidationResult = FloorOrderSchema.validate(
        req.params.order
      );
      if (vl.error != undefined) {
        res.status(400).json({
          error: true,
          code: 400,
          message: vl.error.message,
          details: vl.error.details,
        });
        return;
      }
      try {
        const dbData = await rooms.readAll();
        res.status(200).json({
          code: 200,
          data: dbData.filter((x) => {
            return x.qavat == vl.value;
          }),
        });  
      } catch (error) {
        console.log(error);
      }
      
    } else {
      res.status(400).json({
        error: true,
        code: 400,
        message: "Xona qavati faqat musbat raqamlarda berilishi kerak!",
      });
    }
  }
);

// Asosiy sahifa yoki home
userRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.sendFile("index.html", { root: path.join(__dirname, "..", "views", "userView") });
});


export default userRouter;
