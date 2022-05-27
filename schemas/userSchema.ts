import joi, { NumberSchema, AnySchema, Err, boolean } from "joi";

const FloorOrderSchema: NumberSchema = joi.number().min(1).integer().required().error(new Error("Xona qavati faqat musbat raqamda berilishi kerak!"));


joi.object({
    type: joi.string().valid("xona").required(),
    order: joi.number().min(0).required(),
    qavat: joi.number().min(0).required(),
    side: joi.string().valid("left", "right").required(),
    capacity: joi.number().min(0).required()
}).required();

export {
    FloorOrderSchema,
 
}















