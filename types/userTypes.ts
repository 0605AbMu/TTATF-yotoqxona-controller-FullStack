import { ObjectId } from "mongodb"

export type TNotFoundType = {
msg: String
}
export type TFloorDataType = {
    order: Number
}
export type ReturnForFloorDataType =  Array<TRoomType>

export type TStudentType = {
    _id: Number,
    name: String,
    guruh: String,
    kursi: String,
    more?: "more.."
}
export type TRoomType = {
    type: "Xona" | "O'quv xona" | "etc.."
    _id: Number,
    capacity: Number,
    busy: Number,
    side: "right" | "left",
    order: Number,
    qavat: Number,
    students: Array<TStudentType>
}

// export type TError = {
//     msg: String | "undefined" | Number
//     code: 200 | 202 | 404 | 510
// }


interface IError  {
    msg: String | "undefined" | Number
    code: 200 | 202 | 404 | 510
}






// const student:StudentType = {
//     name:"Abdumannon"
// }


// {
//     type: "Xona",
//     __id: 123,
//     capacity: 5,
//     busy: 3,
//     side: "left",
//     order: 1,
//     qavat: 1,
//     students: [
//       {
//         _id: 1,
//         name: "Abdumannon Shamsiyev",
//         guruh: "108-21",
//         kursi: "1-kurs",
//         more: "more ...",
//       },
//       {
//         _id: 2,
//         name: "John Smith",
//         guruh: "109-21",
//         kursi: "2-kurs",
//         more: "more ...",
//       },
//     ],
//   }
