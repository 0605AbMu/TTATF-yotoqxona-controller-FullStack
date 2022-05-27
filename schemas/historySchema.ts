import joi, { NumberSchema, AnySchema, Err, boolean, ObjectSchema } from "joi";



const HistorySchema:ObjectSchema = joi.object({
    type: joi.string().valid("O'chirildi" , "Yangilandi" , "Ko'chirildi").required(),
    pasport: joi.string().min(9).required(),
    name: joi.string().required(),
    message: joi.string()
}).required();

export {
    HistorySchema,
}

