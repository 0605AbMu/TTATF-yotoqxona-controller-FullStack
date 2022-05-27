import { ObjectId } from "mongodb"

export type THistory = {
    type: "O'chirildi" | "Yangilandi" | "Ko'chirildi",
    date: Date,
    pasport: String,
    name: String,
    message?: String
}