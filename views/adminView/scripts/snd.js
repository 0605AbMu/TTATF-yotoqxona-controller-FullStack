this.updateAllData = async function (order) {
    this.allData = [];
    try {
        const data = await (await fetch(window.location.origin + "/floor/" + order)).json();
        if (data && data.code == 200) {
            this.allData = data.data;
            updateRoomUI()
        } else {
            window.alert("Qavat ma'lumotlarini olib bo'lmadi!\nError Message: " + data.message);
        }

    } catch (error) {
        window.alert("Ma'lumotlarni yangilab bo'lmadi!");
    }

    try {
        showAllHistory(await (await fetch(window.location.origin + "/admin/getAllHistory/")).json());
    } catch (error) {
        window.alert("Jarayonlar tarixi ma'lumotlarini olib bo'lmadi!\n[ERROR]\n" + error);
    }

}

this.pasport = document.getElementById("Pasport");

this.search = async function () {
    if (pasport.value.length == 0) {
        return window.alert("Qidirilayotgan talaba pasport seriya va raqamini kiriting");
    }
    const result = await getStudentByPasport(pasport.value);
    if (result) {
        return showStudentData(result);
    }



}


this.getStudentByPasport = async function (pasport) {
    try {
        const data = await (await fetch(window.location.origin + "/admin/student/" + pasport)).json();
        if (data.code != 200) {
            return window.alert(`Status Code: ${data.code}\nMessage: ${data.message}`);
        }
        return data.data;
    } catch (error) {
        window.alert("Ma'lumotlarni olishining imkoni yo'q", error)
    }
}


this.updateRoom = async function () {

    console.log("Updating.....")


    if (pasport.value.length == 0) {
        return window.alert("👈Pasport seriyasini kiriting!");
    }

    const result = await getStudentByPasport(pasport.value);
    if (result == null) {
        return window.alert("🤷‍♂️BuBu Pasport seriyasiga ega talaba topilmadi!");
    }

    const room = allData.find(({ _id }) => { return _id == session.roomID });
    if (room.length == 0) {
        return window.alert("Siz tanlagan xona topilmadi!. Ilitimos qayta uruning");
    }
    if (session.roomID == undefined || session.pasport == undefined) {
        return window.alert("Avval joylashtiriladigan xonani va joyni tanlang!");
    }

    showStudentData(result);

    if (window.confirm(result["Pasport"] + ` - pasport seriya va raqamiga ega talabani ${room.qavat}-qavat ${room.order}-xonaga joylashtirishni/yangilashni tasdiqlaysizmi?`)) {

        const ind = room.students.findIndex((x) => { return x == session.pasport });
        if (ind == -1) {
            return window.alert("Yanagilanishi kerak bo'lgan joy topilmadi!");
        }
        room.students[ind] = result["Pasport"];
        const sendingId = room._id;
        room._id = undefined;


        fetch((window.location.origin + "/admin/rooms/update/"), {
            body: JSON.stringify({ _id: sendingId, data: JSON.parse(JSON.stringify(room)) }),
            bodyUsed: true,
            method: "PUT",
            headers: { "Content-Type": "Application/JSON" }
        })
            .then(res => { return res.json() })
            .then(async data => {
                console.log(data)
                if (data.code != 200) {
                    window.alert(`Status Code: ${data.code}\nMessages: ${data.message}\nDetails: ${data.details}`);
                } else {
                    await addToHistory("Yangilandi", result["Pasport"]);
                    window.alert("Muvoffaqiyatli Yangilandi!");
                    updateAllData(room.qavat);
                }
            })
            .catch(e => {
                window.alert("Ma'lumotni yangilab bo'lmadi!\n" + e)
            })

        window.alert("Yangilandi/Joylashtirildi")
    }

}



this.deleteRoomMember = async function () {

    if (session.pasport && session.roomID) {
        fetch(window.location.origin + "/admin/room/" + session.roomID)
            .then(res => { return res.json() })
            .then(data => {
                if (data.code != 200) {
                    return window.alert(data.message);
                }
                const room = data.data;
                const ppInd = room.students.findIndex(x => { return x == session.pasport });
                if (ppInd == -1) {
                    return window.alert("Bu xonada bunday Pasport seriya va raqamiga talaba topilmadi!");
                }


                const stPas = room.students[ppInd];

                room.students[ppInd] = -1;
                const sendingId = room._id;
                room._id = undefined;
                
                fetch((window.location.origin + "/admin/rooms/update/"), {
                    body: JSON.stringify({ _id: sendingId, data: JSON.parse(JSON.stringify(room)) }),
                    bodyUsed: true,
                    method: "PUT",
                    headers: { "Content-Type": "Application/JSON" }
                })
                    .then(res => { return res.json() })
                    .then(async data => {
                        if (data.code != 200) {
                            window.alert(`Status Code: ${data.code}\nMessages: ${data.message}\nDetails: ${data.details}`);
                        } else {
                            await addToHistory("O'chirildi", stPas);
                            window.alert("Muvoffaqiyatli o'chirildi!");
                            updateAllData(room.qavat);
                        }
                    })
                    .catch(e => {
                        window.alert("Ma'lumotni o'chirib bo'lmadi!\n" + e)
                    })
            })
            .catch(e => {
                window.alert("O'chirishning iloji bo'lmadi!");
            })

    } else {
        window.alert("Xona va joy egasini tanlang!");
    }
}


this.forward = false;

this.forwardButtonEvent = async function () {
    if (session.pasport && session.roomID) {
        fetch(window.location.origin + "/admin/room/" + session.roomID)
            .then(res => { return res.json() })
            .then(data => {
                if (data.code != 200) {
                    return window.alert(`Status Code: ${data.code}\nMessages: ${data.message}\nDetails: ${data.details}`);
                }

                this.forward = true;
                oldSession = session;
                session = {};
                window.alert("Ko'chirilishi kerak bo'lgan joyni tanlang!");
            })
            .catch(e => {
                window.alert("Ko'chirishning iloji bo'lmadi!");
            })

    } else {
        return window.alert("Xona va joy egasini tanlang!");
    }
};

this.forwardAction = async function () {
    this.forward = false;
    try {

        let room2 = await (await fetch(window.location.origin + "/admin/room/" + session.roomID)).json();


        if (!room2 || room2.code != 200) {
            return window.alert("O'tkazilishi kerak bo'lgan xona ma'lumotlari topilmadi!");
        }
        let room1 = await (await fetch(window.location.origin + "/admin/room/" + oldSession.roomID)).json();
        if (!room1 || room1.code != 200) {
            return window.alert("O'tkazilayotgan xona ma'lumotlari topilmadi!");
        }


        

        if ( room1.data._id == room2.data._id){ this.forward = false; return window.alert("Bu Funksiya faqat qo'shni xonalar uchun amal qiladi!\nQaytdan urinib ko'ring...")};


        room2 = room2.data;
        room1 = room1.data;




        if (window.confirm(`${room1.qavat}-qavat ${room1.order}-xonadagi talabani ${room2.qavat}-qavat ${room2.order}-xonaga ko'chirishni istaysizmi?`)) {

            const student1Ind = room1.students.findIndex(x => { return x == oldSession.pasport });
            if (student1Ind == -1) {
                return window.alert("Ko'chirilishi kerak bo'lgan talabaning ma'lumotlari topilmadi!");
            }
            const secondStudentInd = room2.students.findIndex(x => { return x == session.pasport });

            const rdt = room1.students[student1Ind]
            room1.students[student1Ind] = room2.students[secondStudentInd];
            room2.students[secondStudentInd] = rdt;


            const sending1Id = room1._id;
            room1._id = undefined;

            const sending2Id = room2._id;
            room2._id = undefined;


            fetch((window.location.origin + "/admin/rooms/updateMore/"), {
                body: JSON.stringify([{ _id: sending1Id, data: JSON.parse(JSON.stringify(room1)) }, { _id: sending2Id, data: JSON.parse(JSON.stringify(room2)) }]),
                bodyUsed: true,
                method: "PUT",
                headers: { "Content-Type": "Application/JSON" }
            })
                .then(res => { return res.json() })
                .then(async data => {
                    if (data.code != 200) {
                        window.alert(`Status Code: ${data.code}\nMessages: ${data.message}\nDetails: ${data.details}`);
                    } else {

                        await addToHistory("Ko'chirildi", oldSession.pasport, `${oldSession.pasport} - Pasport seriyasi va raqamiga ega talaba ${room1.qavat}, ${room1.order}-sonli xonadan ${room2.qavat}, ${room2.order}-sonli xonaga`)
                        window.alert("Muvoffaqiyatli Ko'chirildi!");
                        updateAllData(room2.qavat);


                    }
                })
                .catch(e => {
                    window.alert("Ma'lumotni o'chirib bo'lmadi!\n" + e)
                })



        } else {
            window.alert("Jarayon Bekor qilindi");
        }





    } catch (error) {
        window.alert("[ERROR]\n" + error);
    }

}


this.addToHistory = async function (type, pasport, message = "") {
    const data = await getStudentByPasport(pasport);
    if (!data) {
        return window.alert("Talaba ma'lumotini olib bo'lmadi!");
    }
    const student = data;
    fetch(window.location.origin + "/admin/addHistory", {
        body: JSON.stringify({
            type: type,
            name: student.FIO || "noma'lum",
            pasport: student["Pasport"],
            message: message || " ",
        }),
        headers: { "Content-Type": "Application/JSON" },
        method: "POST"
    })
}



this.updateFloors = function () {
    fetch(window.location.origin + "/getFloorsCount", { method: "get" })
        .then(res => { return res.json() })
        .then(data => {
            if (data.code != 200) {
                return window.alert(data.msg);
            }
            for (let i = 0; i < data.floorCount; i++) {
                console.log(i)
                tabs.innerHTML += `<input type="button" value=${i + 1} onclick="openTab(event, ${i})"/>\n`;
            }
        })
        .catch(e => {
            console.log("Xatolik ketdi: ", e);
        })
}

updateFloors();