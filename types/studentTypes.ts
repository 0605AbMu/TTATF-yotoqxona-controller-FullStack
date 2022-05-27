// "_id": {
//     "$oid": "6225cc9ff0626e8a840ed8c2"
//   },
//   "Talaba ID": "368201100149",
//   "Fuqarolik": "O‘zbekiston Respublikasi fuqarosi",
//   "JSHSHIR-kod": "52206016230085",
//   "Pasport": "AB8347610",
//   "Tug‘ilgan sana": "2001-06-22",
//   "Telefon": "+998903797901",
//   "OTM nomi": "Toshkent tibbiyot akademiyasi Termiz filiali",
//   "Ta'lim turi": "Bakalavr",
//   "Ta'lim shakli": "Kunduzgi",
//   "Shifr": "5511100",
//   "Mutaxassislik": "Xalq tabobati",
//   "Talaba kursi": "2-kurs",
//   "Guruh": "x20-01a",
//   "Davlat": "O‘zbekiston",
//   "DViloyat": "Surxondaryo viloyati",
//   "DTuman": "Denov tumani",
//   "DDoimiy manzil": "Bobo ota MFY",
//   "JTuman": "Termiz shahri",
//   "JJoriy manzil": "A.Ikromov kuchasi 84-uy",
//   "Turar joy turi": "Ijaradagi uyda",
//   "Fakultet": "Davolash"


export type TStudent =  {
_id:{
    $oid: String
},
"Talaba ID": String,
"Fuqarolik": String,
"JSHSHIR-kod": String,
"Pasport": String,
"Tug‘ilgan sana": String, 
"Telefon": String
"OTM nomi": String
"Ta'lim turi": String
"Ta'lim shakli": String
"Shifr": String
"Mutaxassislik": String
"Talaba kursi": 1 | 2 | 3 | 4 | 5 | 6 | Number,
"Guruh": String,
"Davlat": String,
"DViloyat": String,
"DTuman": String,
"DDoimiy manzil": String, 
"JTuman": String,
"JJoriy manzil": String,
"Turar joy turi": String,
"Fakultet": String
}



export type TStudentArray = TStudent[];


