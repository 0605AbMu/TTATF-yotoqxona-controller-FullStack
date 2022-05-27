this.tXona = `
<div class="xona-container">
    <span class="xona-order" id="order">
        {{order}}
    </span>
    <div class="xona">

       {{joy}}   


    </div>
    
</div>
`;

this.tJoy = `
<span class="material-icons bed_icon" tabindex="0" onclick="openPlace(event, '{{Pasport}}', '{{roomID}}')" style="{{background-color}}"> 
bed
</span>
`;




this.tColor = function (b = false) {
  if (b) {
    return `background-color: rgb(28, 150, 28);`;
  } else return `background-color: rgb(136, 136, 136);`;
};




this.rightSide = document.getElementById("right");
this.leftSide = document.getElementById("left");
this.infoBar = document.getElementById("shower");
this.tabs = document.getElementById("tabs");
this.studentData = document.getElementById("studentData");
this.generalData = document.getElementById("generalData");
this.floorData = document.getElementById("floorData");
this.roomData = document.getElementById("roomData");
this.historyBox = document.getElementById("history");
this.session = {};
this.oldSession = {};



// Ma'lumotlar saqlanadi
this.allData = [];




// Xonalar ro'yxatini yangilaydi
this.updateRoomUI = function () {

  rightSide.innerHTML = "";
  leftSide.innerHTML = "";

  //allData.map(x => { tabs.innerHTML += `` })

  allData.forEach((xx, order) => {
    let st = [];

    xx.students.forEach((x, ind) => {
      if (x != -1) {
        st.push(
          tJoy
            .replace("{{background-color}}", tColor(true))
            .replace("{{Pasport}}", x)
            .replace("{{roomID}}", xx._id)
        );
      } else {
        st.push(
          tJoy
            .replace("{{background-color}}", tColor())
            .replace("{{Pasport}}", x)
            .replace("{{roomID}}", xx._id));
      }
    });

    if (xx.side == "right") {
      rightSide.innerHTML += tXona
        .replace("{{joy}}", st.join("\n"))
        .replace("{{order}}", xx.order || -1);
    } else {
      leftSide.innerHTML += tXona
        .replace("{{joy}}", st.join("\n"))
        .replace("{{order}}", xx.order || -1);
    }
  });
};

updateRoomUI();


// Qavatlarni ochadi
this.openTab = async function (ev, order = 0) {
  rightSide.style.display = "flex";
  leftSide.style.display = "flex";
  [...ev.path[1].children].forEach((x, order) => {
    x.value = order + 1;
  });
  await updateAllData(order + 1);
  ev.path[0].value = order + 1 + " - qavat";
  showFloorData(calcFloorStat(order+1));
};



// Joy haqidagi ma'lumotlarni ochadi
this.openPlace = async function (ev, pasport, roomID) {
  
  let room = allData.find(({ _id }) => {
    return _id == roomID;
  });
  if (!room) return window.alert("Bu xona mavjud emas!");

  const rmData = Object.create(room);
  delete rmData.students;
  showRoomData(calcRoomStat(rmData));
  session.pasport = pasport;
  session.roomID = roomID;



  if (this.forward == true ){
    forwardAction();
  }
  if (!isNaN(parseInt(pasport))) {
    window.alert("🤷‍♂️Bu joy haqidagi ma'lumot mavju emas!");
    session.pasport = parseInt(pasport);
    return showStudentData({ "": "🤷‍♂️Bu joy haqidagi ma'lumot mavju emas!" })
  }

  const result = await getStudentByPasport(pasport);
  if (result) {
    showStudentData(result)
  }
};

// InforBar ko'rsatadi
this.toggleInfoBar = function () {
  infoBar.style.transition = ".3s";
  if (infoBar.style.bottom == "-300px" || infoBar.style.bottom == "") {
    infoBar.style.bottom = "0";
  }
};

toggleInfoBar();

this.showStudentData = function (data) {
  studentData.innerHTML = "";
  if (!data || Object.keys(data).length == 0) {
    var label = document.createElement("label");
    label.innerHTML = `🤷‍♂️Bu joyda hech kim mavjud emas!`;
    return studentData.appendChild(label);
  }
  Object.keys(data).forEach(x => {
    var label = document.createElement("label");
    label.innerHTML = `${x}: ${data[x]}`;
    studentData.appendChild(label)
  })
}

this.showGeneralData = function (data) {
  generalData.innerHTML = "";
  Object.keys(data).forEach(x => {
    var label = document.createElement("label");
    label.innerHTML = `${x}: ${data[x]}`;
    generalData.appendChild(label)
  })
}

this.showFloorData = function (data) {
  floorData.innerHTML = "";
  if (!data || Object.keys(data).length == 0) {
    var label = document.createElement("label");
    label.innerHTML = `Bu qavat ma'lumotlari topilmadi!`;
    return floorData.appendChild(label);
  }
  Object.keys(data).forEach(x => {
    var label = document.createElement("label");
    label.innerHTML = `${x}: ${data[x]}`;
    floorData.appendChild(label)
  })
}

this.showRoomData = function (data) {
  roomData.innerHTML = "";
  if (!data || Object.keys(data).length == 0) {
    var label = document.createElement("label");
    label.innerHTML = `Bu xona ma'lumotlari topilmadi!`;
    return roomData.appendChild(label);
  }
  Object.keys(data).forEach(x => {
    var label = document.createElement("label");
    label.innerHTML = `${x}: ${data[x]}`;
    roomData.appendChild(label)
  })
}

this.calcFloorStat = function (order) {
  let rt = {};
  console.log("All Data on calc", allData);
  rt["🔸Qavat tartibi"] = order;
  rt["🔸Jami xonalar soni"] = allData.filter(({ qavat }) => { return qavat == order }).length;
  rt["🔸O'ng tomon xonalari soni"] = allData.filter(({ side, qavat }) => { return qavat == order && side == "right" }).length;
  rt["🔸Chap tomon xonalari soni"] = allData.filter(({ side, qavat }) => { return qavat == order && side == "left" }).length;
  let r = 0;
  allData.filter(({ qavat }) => { return qavat == order }).forEach((x, ind) => {
    if (x.capacity > x.students.filter(x=>{return x != -1}).length) r++;
  });
  rt["🔸Joy bor xonalar"] = r;
  return rt;
}

this.calcRoomStat = function (data) {
  return {
    "🆔Xona ID": data._id,
    "🔸Turi": data.type,
    "🔸Sig'imi": data.capacity,
    "🔸Bo'sh joylar soni": (data.capacity - data.students.filter(x=>{return x != -1}).length)
  }
}



this.showAllHistory = function(logs){
console.log(logs)
historyBox.value = "";
(logs || []).forEach(x=>{
  historyBox.value += `[${(new Date(x.date)).toLocaleDateString()} - ${x.type}]: [Pasport]: ${x.pasport} | [Ism]: ${x.name} -> (${x.message||""})\n`;
})

}


