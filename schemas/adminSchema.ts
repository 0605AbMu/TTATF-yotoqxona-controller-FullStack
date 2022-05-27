import joi, { NumberSchema, ObjectSchema, AnySchema, Err, boolean } from "joi";
import { ObjectId } from "mongodb";



export const AddRoomSchema: ObjectSchema = joi.object({
    type: joi.string().valid("xona").required(),
    order: joi.number().min(0).required(),
    qavat: joi.number().min(0).required(),
    side: joi.string().valid("left", "right").required(),
    capacity: joi.number().min(0).required()
}).required();


export const UpdateRoomSchema: ObjectSchema = joi.object({
    type: joi.string().valid("xona").required(),
    order: joi.number().min(0).required(),
    qavat: joi.number().min(0).required(),
    side: joi.string().valid("left", "right").required(),
    capacity: joi.number().min(0).required(),
    students: joi.array().required()
}).required();

export const PasportSchema: AnySchema = joi.custom((value: string, helpers) => {
    if (value.length != 9) return helpers.error("Passport seiya va raqami 9 belgidan iborat bo'lishi kerak!");
    if (isNaN(parseInt(value.split("").splice(0, 2).join())) && !isNaN(parseInt(value.split("").splice(2, (value.length)).join("")))) {
        return value;
    } else {
        return helpers.error("Passport seriya va raqami noto'g'ri kiritildi!");
    }
}, "Pasport seiyasi va raqami").required()
