// { type: 'xona', order: 0, qavat: 1, side: 'right', capacity: 0 }

import { ObjectId } from "mongodb"

export type TRoom = {
    _id?: ObjectId
    type: 'xona' | String,
    order: Number,
    qavat: Number,
    side: 'left' | 'right' | String,
    capacity: Number,
    busy: Number,
    students: []
}