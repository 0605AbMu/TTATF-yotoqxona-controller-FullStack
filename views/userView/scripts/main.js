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
<span class="material-icons bed_icon" tabindex="0"  style="{{background-color}}"> 
bed
</span>
`;

// this.tJoy = `
// <span class="material-icons bed_icon" onclick="openPlace(event, {{index}}, {{roomID}})">
// bedroom_child
// </span>
// `;

this.tColor = function (b = false) {
  if (b) {
    return `background-color: rgb(28, 150, 28);`;
  } else return `background-color: rgb(136, 136, 136);`;
};

this.rightSide = document.getElementById("right");
this.leftSide = document.getElementById("left");
this.infoBar = document.getElementById("shower");
this.tabs = document.getElementById("tabs");


this.floorData = [];

this.updateRoomUI = function () {
  rightSide.innerHTML = "";
  leftSide.innerHTML = "";
  floorData.map(x => { tabs.innerHTML += `` })
  floorData.forEach((xx, order) => {
    let st = [];

    xx.students.forEach((x, ind) => {
      if (x != -1) {
        st.push(
          tJoy
            .replace("{{background-color}}", tColor(true))
            .replace("{{index}}", ind)
            .replace("{{roomID}}", xx.__id)
        );
      } else {
        st.push(
          tJoy
            .replace("{{background-color}}", tColor())
            .replace("{{index}}", ind)
            .replace("{{roomID}}", xx.__id));
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
this.openTab = function (ev, order = 0) {
  [...ev.path[1].children].forEach((x, order) => {
    x.value = order + 1;
  });
  ev.path[0].value = order + 1 + " - qavat";
  fetch(window.location.origin + "/floor/" + (order + 1))
    .then(res => res.json())
    .then(data => {
      if (data.code == 200) {
        this.floorData = data.data
        console.log(floorData);
        updateRoomUI();
      } else {
        window.alert(`[ERROR]\ncode: ${data.code}\nMessage: ${data.message}\nDetails: ${data.details || "undefined"}`);
      }
    })
    .catch(e => {
      console.log("Xatolik ketdi: ", e);
    })

};

this.openPlace = function (ev, ind, roomID) {
  const room = floorData.find(({ __id }) => {
    return __id == roomID;
  });
  if (!room) return window.alert("Bu xona mavjud emas!");
  const pp = room.students[ind];
  if (Object.keys(pp).length == 0)
    return window.alert("Bu joy haqidagi ma'lumot mavju emas!");

};

this.toggleInfoBar = function () {
  infoBar.style.transition = ".3s";
  if (infoBar.style.bottom == "-300px" || infoBar.style.bottom == "") {
    infoBar.style.bottom = "0";
  }
};

toggleInfoBar();


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
