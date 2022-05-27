/*!
 This file is part of DecSoft App Builder.
 Visit our website for license information.
 Copyright ©2022 DecSoft Utils. All rights reserved.
 Visit our website at: https://www.decsoftutils.com
 */

Vue.config.silent = false;
Vue.config.devtools = true;
Vue.config.performance = false;

window.appFrames = {};


Vue.component("dialog1", function (resolve, reject) {
  jQuery.get("app/views/html/dialog1.html", function (response) {
    resolve({
      props: ["app"],
      template: response,
      data: function () {
        return {
          name: "dialog1",
          size: "xl",
          classes: "",
          event: null,
          container1: {
            name: "container1",
            classes: "",
            title: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label1: {
            name: "label1",
            classes: "",
            input: "",
            title: "",
            text: "Xona turini tanlang:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label3: {
            name: "label3",
            classes: "",
            input: "",
            title: "",
            text: "Xona tartib raqami:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input1: {
            name: "input1",
            type: "number",
            value: 0,
            size: "sm",
            classes: "",
            title: "",
            placeholder: "Tartib raqam",
            tabIndex: 0,
            readonly: false,
            min: 0,
            max: -1,
            step: 1,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label4: {
            name: "label4",
            classes: "",
            input: "",
            title: "",
            text: "Qavati:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          select4: {
            name: "select4",
            value: null,
            items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            itemIndex: 0,
            size: "sm",
            classes: "",
            title: "",
            placeholder: "",
            tabIndex: 0,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialog1"].select4;
              self.event = event;
              self.itemIndex = self.items.indexOf(event.target.value);

            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          select5: {
            name: "select5",
            value: null,
            items: ["right", "left"],
            itemIndex: 0,
            size: "sm",
            classes: "",
            title: "",
            placeholder: "",
            tabIndex: 0,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialog1"].select5;
              self.event = event;
              self.itemIndex = self.items.indexOf(event.target.value);

            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label5: {
            name: "label5",
            classes: "",
            input: "",
            title: "",
            text: "Tarafi:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input3: {
            name: "input3",
            type: "number",
            value: 0,
            size: "sm",
            classes: "",
            title: "",
            placeholder: "Tartib raqam",
            tabIndex: 0,
            readonly: false,
            min: 0,
            max: -1,
            step: 1,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label6: {
            name: "label6",
            classes: "",
            input: "",
            title: "",
            text: "Xona Sig\x27imi:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          select6: {
            name: "select6",
            value: null,
            items: ["xona", "dsfsdfsdf", "sdfsdf", "4356436"],
            itemIndex: 0,
            size: "sm",
            classes: "",
            title: "",
            placeholder: "",
            tabIndex: 0,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialog1"].select6;
              self.event = event;
              self.itemIndex = self.items.indexOf(event.target.value);

            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button3: {
            name: "button3",
            classes: "",
            size: "sm",
            title: "",
            tabIndex: -1,
            text: "Qo\x27shish",
            kind: "primary",
            outline: false,
            active: false,
            leftIcon: "fas fa-plus",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialog1"].button3;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button3" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List




dialogs.dialog1.http1.data.type = dialogs.dialog1.select6.items[dialogs.dialog1.select6.itemIndex].toLowerCase();

dialogs.dialog1.http1.data.order = parseInt(dialogs.dialog1.input1.value);

dialogs.dialog1.http1.data.qavat = parseInt(dialogs.dialog1.select4.items[dialogs.dialog1.select4.itemIndex]);

const side = dialogs.dialog1.select5.items[dialogs.dialog1.select5.itemIndex];

dialogs.dialog1.http1.data.side = side;

dialogs.dialog1.http1.data.capacity = parseInt(dialogs.dialog1.input3.value);


dialogs.dialog1.http1.execute();


app.plugins.decsoft.blockui.block("Biroz kuting...");






            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button4: {
            name: "button4",
            classes: "",
            size: "sm",
            title: "",
            tabIndex: 0,
            text: "Bekor qilish",
            kind: "danger",
            outline: false,
            active: false,
            leftIcon: "fas fa-backspace",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialog1"].button4;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button4" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List


app.hideDialog("dialog1");




            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button1: {
            name: "button1",
            classes: "",
            size: "sm",
            title: "",
            tabIndex: -1,
            text: "Yangilash",
            kind: "success",
            outline: false,
            active: false,
            leftIcon: "fas fa-sync-alt",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: true,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialog1"].button1;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button3" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List


const {_id, ...data} = app.store.updatingData






data.type = dialogs.dialog1.select6.items[dialogs.dialog1.select6.itemIndex].toLowerCase();

data.order = parseInt(dialogs.dialog1.input1.value);

data.qavat = parseInt(dialogs.dialog1.select4.items[dialogs.dialog1.select4.itemIndex]);

const side = dialogs.dialog1.select5.items[dialogs.dialog1.select5.itemIndex];

data.side = side;
data.capacity = parseInt(dialogs.dialog1.input3.value);
data.index = undefined;

let st = [];

data.students.forEach(x => {  isNaN(parseInt(x))?st.push(x):"" } );
console.log("st", st);
if (st.length > data.capacity){
return app.showAlert(`Xona sig'imi talabalar sonidan kichkina.\n ${st.length} dan katta qiymat kiriting`, 'Warning', app.kind.warning);
};
while(data.capacity != st.length){st.push(-1);}

data.students = st;

dialogs.dialog1.http2.data = {};


dialogs.dialog1.http2.data = {_id: _id, data: data};

console.log("updating data", dialogs.dialog1.http2.data);


dialogs.dialog1.http2.execute();


app.plugins.decsoft.blockui.block("Biroz kuting...");






            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },
          button2: {
            name: "button2",
            classes: "",
            size: "sm",
            title: "",
            tabIndex: -1,
            text: "O\x27chirish",
            kind: "danger",
            outline: false,
            active: false,
            leftIcon: "fas fa-trash",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: true,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialog1"].button2;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button3" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List



dialogs.dialog1.http3.data._id =  dialogs.dialog1.label7.text;



dialogs.dialog1.http3.execute();


app.plugins.decsoft.blockui.block("Biroz kuting...");






            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label2: {
            name: "label2",
            classes: "",
            input: "",
            title: "",
            text: "ID: ",
            leftIcon: "fas fa-id-card",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label7: {
            name: "label7",
            classes: "",
            input: "",
            title: "",
            text: "",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          http1: {
            name: "http1",
            data: {},
            headers: {},
            method: "POST",
            timeout: 0,
            userName: "",
            password: "",
            cache: false,
            contentType: "application/json",
            responseType: "",
            url: "/admin/rooms/add",
            event: null,
            response: null,
            statusCode: null,
            textStatus: null,
            request: null,
            errorThrown: null,
            execute: function () {
              $.ajax({
                url: this.url,
                processData: false,
                cache: this.cache,
                method: this.method,
                headers: this.headers,
                timeout: this.timeout,
                username: this.userName,
                password: this.password,
                contentType: this.contentType,
                xhrFields: {
                  responseType: this.responseType
                },
                data: app._transformHttpRequest(this)
              })
              .fail(this.fail_handler)
              .done(this.done_handler);
            },
            setHeader: function (name, value) {
              this.headers[name] = value;
            },
            done_handler: function (response, textStatus, request) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialog1"].http1;
              self.response = response;
              self.textStatus = textStatus;
              self.statusCode = request.status;
              self.request = request;


// Place here the Javascript code to be executed in the "Done" event of the "http1" non visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

if (dialogs.dialog1.http1.statusCode==200){
views.view1.table1.data.push(dialogs.dialog1.http1.response);
app.store.allTableData = views.view1.table1.data;
views.view1.table1.data.reverse();
app.showToast("Xona muvoffaqiyatli qo'shildi!", 3000, app.kind.success);
} else {
app.showToast("Ma'lumotlarni yangilashda xatolik yuz berdi!\nStatus Code: " + dialogs.dialog1.http1.statusCode, 3000, app.kind.warning);
}
app.hideDialog("dialog1");
app.plugins.decsoft.blockui.unblock();

            },
            fail_handler: function (request, textStatus, errorThrown) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialog1"].http1;
              self.request = request;
              self.textStatus = textStatus;
              self.errorThrown = errorThrown;
              self.statusCode = request.status;


// Place here the Javascript code to be executed in the "Fail" event of the "http1" non visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List


app.showToast("Ma'lumotlarni yangilashda xatolik yuz berdi!\nStatus Code: " + dialogs.dialog1.http1.statusCode, 3000, app.kind.warning);
app.plugins.decsoft.blockui.unblock();




            }
          },

          http2: {
            name: "http2",
            data: {},
            headers: {},
            method: "PUT",
            timeout: 0,
            userName: "",
            password: "",
            cache: false,
            contentType: "application/json",
            responseType: "",
            url: "/admin/rooms/update",
            event: null,
            response: null,
            statusCode: null,
            textStatus: null,
            request: null,
            errorThrown: null,
            execute: function () {
              $.ajax({
                url: this.url,
                processData: false,
                cache: this.cache,
                method: this.method,
                headers: this.headers,
                timeout: this.timeout,
                username: this.userName,
                password: this.password,
                contentType: this.contentType,
                xhrFields: {
                  responseType: this.responseType
                },
                data: app._transformHttpRequest(this)
              })
              .fail(this.fail_handler)
              .done(this.done_handler);
            },
            setHeader: function (name, value) {
              this.headers[name] = value;
            },
            done_handler: function (response, textStatus, request) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialog1"].http2;
              self.response = response;
              self.textStatus = textStatus;
              self.statusCode = request.status;
              self.request = request;


// Place here the Javascript code to be executed in the "Done" event of the "http2" non visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

app.hideDialogs("dialog1");
app.plugins.decsoft.blockui.unblock();
if (dialogs.dialog1.http2.statusCode!=200){
app.showToast("Ma'lumotni yangilab bo'lmadi.\nStatus Code: " + dialogs.dialog1.http2.statusCode, 3000, app.kind.warning);
} else {
  //views.view1.table1.data[(views.view1.table1.data.findIndex(({_id})=>{return _id == dialogs.dialog1.http2.response._id}))] = dialogs.dialog1.http2.response;
  document.querySelector("#button2").click();
  //console.log("Update Result", );
}



            },
            fail_handler: function (request, textStatus, errorThrown) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialog1"].http2;
              self.request = request;
              self.textStatus = textStatus;
              self.errorThrown = errorThrown;
              self.statusCode = request.status;


// Place here the Javascript code to be executed in the "Fail" event of the "http2" non visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List
app.plugins.decsoft.blockui.unblock();
app.hideDialogs();
app.showToast("Ma'lumotni yangilab bo'lmadi.\nStatus Code: " + dialogs.dialog1.http2.statusCode + "\nMessage: " + dialogs.dialog1.http2.response, 3000, app.kind.warning);


            }
          },

          http3: {
            name: "http3",
            data: {},
            headers: {},
            method: "DELETE",
            timeout: 0,
            userName: "",
            password: "",
            cache: false,
            contentType: "application/json",
            responseType: "",
            url: "/admin/rooms/delete",
            event: null,
            response: null,
            statusCode: null,
            textStatus: null,
            request: null,
            errorThrown: null,
            execute: function () {
              $.ajax({
                url: this.url,
                processData: false,
                cache: this.cache,
                method: this.method,
                headers: this.headers,
                timeout: this.timeout,
                username: this.userName,
                password: this.password,
                contentType: this.contentType,
                xhrFields: {
                  responseType: this.responseType
                },
                data: app._transformHttpRequest(this)
              })
              .fail(this.fail_handler)
              .done(this.done_handler);
            },
            setHeader: function (name, value) {
              this.headers[name] = value;
            },
            done_handler: function (response, textStatus, request) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialog1"].http3;
              self.response = response;
              self.textStatus = textStatus;
              self.statusCode = request.status;
              self.request = request;


// Place here the Javascript code to be executed in the "Done" event of the "http2" non visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

if (dialogs.dialog1.http3.statusCode!=200){
app.showToast("Ma'lumotni o'chirib bo'lmadi.\nStatus Code: " + dialogs.dialog1.http3.statusCode, 3000, app.kind.warning);
} else {
  document.querySelector("#button2").click();
}
app.hideDialogs("dialog1");
app.plugins.decsoft.blockui.unblock();


            },
            fail_handler: function (request, textStatus, errorThrown) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialog1"].http3;
              self.request = request;
              self.textStatus = textStatus;
              self.errorThrown = errorThrown;
              self.statusCode = request.status;


// Place here the Javascript code to be executed in the "Fail" event of the "http2" non visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

app.showToast("Ma'lumotni o'chirib bo'lmadi.\nStatus Code: " + dialogs.dialog1.http3.statusCode, 3000, app.kind.warning);


            }
          },

          button5: {
            name: "button5",
            classes: "",
            size: "sm",
            title: "",
            tabIndex: -1,
            text: "",
            kind: "danger",
            outline: false,
            active: false,
            leftIcon: "fas fa-backspace",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialog1"].button5;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button4" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List


app.hideDialog("dialog1");




            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

        };
      },
      mounted: function () {
        var
          self = this;
        $("#dialog1").on("show.bs.modal", function () {
          var
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.internal.activeDialog = self;
          app._setViewEvents(self);

// Place here the Javascript code to be executed in the "Show" event of the "dialog1" app dialog
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

app.setDialogReadyForDeviceKeyboard();




        });
        $("#dialog1").on("hidden.bs.modal", function () {
          var
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.internal.activeDialog = app._getActiveDialog();

// Place here the Javascript code to be executed in the "Hide" event of the "dialog1" app dialog
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

        });
      },
      methods: {
        show: function () {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide: function () {
          $("#" + this.name).modal("hide");
        },
        clickHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
      }
    });
  });
});
window.appViews = {};

window.appViews.view1 = Vue.component("view1", function (resolve, reject) {
  jQuery.get("app/views/html/view1.html", function (response) {
    resolve({
      props: ["app"],
      template: response,
      data: function () {
        return {
          name: "view1",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          table1: {
            name: "table1",
            classes: "",
            title: "",
            hidden: false,
            striped: true,
            bordered: true,
            borderless: true,
            hover: true,
            small: false,
            responsive: true,
            responsiveBreak: "sm",
            tableStyle: "light",
            headerStyle: "",
            data: [],
            record: {},
            event: null,
            swipeRightHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["view1"].table1;
              self.event = event;

            },
            swipeLeftHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["view1"].table1;
              self.event = event;

            },
            rowClickHandler: function (event, record, index) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["view1"].table1;
              self.event = event;
              self.index = index;
              self.record = record;
              self.record.index = index;

// Place here the Javascript code to be executed in the "RowClick" event of the "table1" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List


            },
            rowDblClickHandler: function (event, record, index) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["view1"].table1;
              self.event = event;
              self.index = index;
              self.record = record;
              self.record.index = index;

// Place here the Javascript code to be executed in the "RowDblClick" event of the "table1" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

app.openItem(views.view1.table1.record);

            },
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button1: {
            name: "button1",
            classes: "",
            size: "sm",
            title: "",
            tabIndex: -1,
            text: "Qo\x27shish",
            kind: "success",
            outline: false,
            active: false,
            leftIcon: "",
            rightIcon: "fas fa-plus",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["view1"].button1;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button1" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

dialogs.dialog1.label7.hidden = true;
dialogs.dialog1.label2.hidden = true;
dialogs.dialog1.button2.hidden = true;
dialogs.dialog1.button1.hidden = true;

dialogs.dialog1.button3.hidden = false;
dialogs.dialog1.button4.hidden = false;

app.showDialog("dialog1");


            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button2: {
            name: "button2",
            classes: "",
            size: "sm",
            title: "",
            tabIndex: -1,
            text: "Yangilash",
            kind: "primary",
            outline: false,
            active: false,
            leftIcon: "fas fa-sync-alt",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["view1"].button2;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button1" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

app.plugins.decsoft.blockui.block("Biroz kuting...");

views.view1.http1.execute();

            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button3: {
            name: "button3",
            classes: "",
            size: "sm",
            title: "",
            tabIndex: -1,
            text: "Orqaga",
            kind: "primary",
            outline: false,
            active: false,
            leftIcon: "far fa-hand-point-left",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["view1"].button3;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button1" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List


window.location.href = window.location.origin + "/admin";


            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          http1: {
            name: "http1",
            data: {},
            headers: {},
            method: "GET",
            timeout: 0,
            userName: "",
            password: "",
            cache: false,
            contentType: "application/x-www-form-urlencoded",
            responseType: "",
            url: "/admin/rooms/getAll",
            event: null,
            response: null,
            statusCode: null,
            textStatus: null,
            request: null,
            errorThrown: null,
            execute: function () {
              $.ajax({
                url: this.url,
                processData: false,
                cache: this.cache,
                method: this.method,
                headers: this.headers,
                timeout: this.timeout,
                username: this.userName,
                password: this.password,
                contentType: this.contentType,
                xhrFields: {
                  responseType: this.responseType
                },
                data: app._transformHttpRequest(this)
              })
              .fail(this.fail_handler)
              .done(this.done_handler);
            },
            setHeader: function (name, value) {
              this.headers[name] = value;
            },
            done_handler: function (response, textStatus, request) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["view1"].http1;
              self.response = response;
              self.textStatus = textStatus;
              self.statusCode = request.status;
              self.request = request;


// Place here the Javascript code to be executed in the "Done" event of the "http1" non visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List


if (views.view1.http1.statusCode!=200){
app.showToast("Ma'lumotlarni yangilashda xatolik yuz berdi!\nStatus Code: " + views.view1.http1.statusCode, 3000, app.kind.warning);
return  app.plugins.decsoft.blockui.unblock();
}
app.store.allTableData = views.view1.http1.response;
views.view1.table1.data = views.view1.http1.response;
app.plugins.decsoft.blockui.unblock();


            },
            fail_handler: function (request, textStatus, errorThrown) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["view1"].http1;
              self.request = request;
              self.textStatus = textStatus;
              self.errorThrown = errorThrown;
              self.statusCode = request.status;


// Place here the Javascript code to be executed in the "Fail" event of the "http1" non visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

app.showToast("Ma'lumotlarni yangilashda xatolik yuz berdi!\nStatus Code: " + views.view1.http1.statusCode, 3000, app.kind.warning);
app.plugins.decsoft.blockui.unblock();

            }
          },

          label1: {
            name: "label1",
            classes: "",
            input: "",
            title: "",
            text: "Filter:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          switch1: {
            name: "switch1",
            value: false,
            text: "",
            classes: "",
            title: "",
            tabIndex: 0,
            hidden: false,
            disabled: false,
            event: null,

            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["view1"].switch1;
                self.event = event;


// Place here the Javascript code to be executed in the "Change" event of the "switch1" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List
console.log(app.store.allTableData);


if (!views.view1.switch1.value){
views.view1.typeahead3.disabled = true;
views.view1.select1.disabled  = true;
views.view1.select2.disabled  = true;
views.view1.select3.disabled  = true;
views.view1.input3.disabled  = true;
views.view1.input2.disabled  = true;
views.view1.button4.disabled = true;
views.view1.table1.data = app.store.allTableData;
} else {
app.store.allTableData.forEach(x=>{ views.view1.typeahead3.items.push({text: x._id, subtext: "Tartib raqami: " + x.order})});
views.view1.typeahead3.disabled = false;
views.view1.select1.disabled  = false;
views.view1.select2.disabled  = false;
views.view1.select3.disabled  = false;
views.view1.input3.disabled  = false;
views.view1.input2.disabled  = false;
views.view1.button4.disabled = false;
}


            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          container2: {
            name: "container2",
            classes: "",
            title: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          typeahead3: {
            name: "typeahead3",
            classes: "",
            event: null,
            hidden: false,
            tabIndex: 0,
            title: "",
            disabled: true,
            readonly: false,
            emptyText: "Bu id ma\x27lumoti topilmadi",
            emptyKind: "info",
            value: "",
            autocomplete: true,
            highlight: true,
            placeholder: "id ....",
            size: "sm",
            item: null,
            items: []
,

itemClickHandler: function (event) {
    var
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["view1"].typeahead3;
  self.event = event;
  
  var 
    index = $(event.target).data('index');  
	
  self.item = self.items[index];

  if (self.autocomplete) {
	self.value = self.items[index].text;
  }
				
  		
},

changeHandler: function (event) {
    var
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["view1"].typeahead3;
  self.event = event;
  	
  self.value = 	$('#' + self.name + '-input').val();	
	
  
// Place here the Javascript code to be executed in the "Change" event of the "typeahead3" visual plugin control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

		
},

focusHandler: function (event) {
    var
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["view1"].typeahead3;
  self.event = event;
				
  		
},

blurHandler: function (event) {
    var
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["view1"].typeahead3;
  self.event = event;
				
  		
},

clickHandler: function (event) {
    var
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["view1"].typeahead3;
  self.event = event;
				
  	
},

dblclickHandler: function (event) {
    var
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["view1"].typeahead3;
  self.event = event;
	
  		
},

mousedownHandler: function (event) {
    var
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["view1"].typeahead3;
  self.event = event;
	
  		
},

mouseupHandler: function (event) {
    var
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["view1"].typeahead3;
  self.event = event;
	
  		
},

mousemoveHandler: function (event) {
    var
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["view1"].typeahead3;
  self.event = event;
	
  		
},

mouseenterHandler: function (event) {
    var
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["view1"].typeahead3;
  self.event = event;
	
  		
},

mouseleaveHandler: function (event) {
    var
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["view1"].typeahead3;
  self.event = event;
	
  		
},

contextmenuHandler: function (event) {
    var
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["view1"].typeahead3;
  self.event = event;
	
  		
},

keyupHandler: function (event) {
    var
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["view1"].typeahead3;
  self.event = event;
	
  		
  
  var
	i = null,
	total = 0,
	pos = null,
	text = '',
	matches = [],
	list = $('#' + self.name + '-list'),
	value = event.target.value;		
	
  list.hide();
  list.html('');
	
  if (app.trimStr(value) === '') {
    return false;		
  }
  
  self.value = 	$('#' + self.name + '-input').val();	  
	
  for (i in self.items) {
	  
	text = self.items[i].text;   
	  
	pos = app.strSearch(app.lowerCase(text), app.lowerCase(value));
	
	if (pos === -1) {
	  continue;
	}    	 

    total++;

    if (self.highlight) {
      text = app.strReplace(text, value, '<strong data-index="' + i + '">' + value + '</strong>');		
	}
	
	if (self.items[i].subtext) {
	  text = text + '<br /><small class="text-muted" data-index="' + i + '">' + self.items[i].subtext + '</small>'; 
	}  
	
	list.append('<li data-index="' + i + '" class="list-group-item ' + self.name + '-list-item' + '">' + text + '</li>');	
  }
	
  if (total === 0 && app.trimStr(self.emptyText) !== '') {
    list.append('<li class="list-group-item text-center list-group-item-' + self.emptyKind + '"><small>' + self.emptyText + '</small></li>');
  }

  list.show();	     
},

keydownHandler: function (event) {
    var
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["view1"].typeahead3;
  self.event = event;
	
  	
},

cutHandler: function (event) {
    var
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["view1"].typeahead3;
  self.event = event;
	
  		
},

copyHandler: function (event) {
    var
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["view1"].typeahead3;
  self.event = event;
	
  		
},

pasteHandler: function (event) {
    var
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["view1"].typeahead3;
  self.event = event;
	
  		
}

          },

          select1: {
            name: "select1",
            value: null,
            items: ["barcha", "xona"],
            itemIndex: 0,
            size: "sm",
            classes: "",
            title: "",
            placeholder: "",
            tabIndex: -1,
            hidden: false,
            disabled: true,
            event: null,
            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["view1"].select1;
              self.event = event;
              self.itemIndex = self.items.indexOf(event.target.value);

// Place here the Javascript code to be executed in the "Change" event of the "select1" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input2: {
            name: "input2",
            type: "number",
            value: -1,
            size: "sm",
            classes: "",
            title: "",
            placeholder: "tartib raqami",
            tabIndex: 0,
            readonly: false,
            min: -1,
            max: 1000000000,
            step: 1,
            hidden: false,
            disabled: true,
            event: null,

            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["view1"].input2;
                self.event = event;


// Place here the Javascript code to be executed in the "Change" event of the "input2" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List


            },
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          select2: {
            name: "select2",
            value: null,
            items: ["barcha", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            itemIndex: 0,
            size: "sm",
            classes: "",
            title: "",
            placeholder: "",
            tabIndex: -1,
            hidden: false,
            disabled: true,
            event: null,
            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["view1"].select2;
              self.event = event;
              self.itemIndex = self.items.indexOf(event.target.value);

// Place here the Javascript code to be executed in the "Change" event of the "select2" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          select3: {
            name: "select3",
            value: null,
            items: ["barcha", "left", "right"],
            itemIndex: 0,
            size: "sm",
            classes: "",
            title: "",
            placeholder: "",
            tabIndex: -1,
            hidden: false,
            disabled: true,
            event: null,
            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["view1"].select3;
              self.event = event;
              self.itemIndex = self.items.indexOf(event.target.value);

// Place here the Javascript code to be executed in the "Change" event of the "select3" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List


            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input3: {
            name: "input3",
            type: "number",
            value: -1,
            size: "sm",
            classes: "",
            title: "",
            placeholder: "tartib raqami",
            tabIndex: 0,
            readonly: false,
            min: -1,
            max: -1,
            step: 1,
            hidden: false,
            disabled: true,
            event: null,

            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["view1"].input3;
                self.event = event;


// Place here the Javascript code to be executed in the "Change" event of the "input3" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List



            },
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label2: {
            name: "label2",
            classes: "",
            input: "",
            title: "",
            text: "ID:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label5: {
            name: "label5",
            classes: "",
            input: "",
            title: "",
            text: "Turi:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label6: {
            name: "label6",
            classes: "",
            input: "",
            title: "",
            text: "Tartib raqami:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label7: {
            name: "label7",
            classes: "",
            input: "",
            title: "",
            text: "Qavati:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label8: {
            name: "label8",
            classes: "",
            input: "",
            title: "",
            text: "Tarafi:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label9: {
            name: "label9",
            classes: "",
            input: "",
            title: "",
            text: "Sig\x27imi",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button4: {
            name: "button4",
            classes: "",
            size: "sm",
            title: "",
            tabIndex: 0,
            text: "",
            kind: "primary",
            outline: false,
            active: false,
            leftIcon: "fas fa-check",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: true,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["view1"].button4;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button4" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List


let allData = app.store.allTableData;


if (views.view1.typeahead3.value!="")
{
allData = allData.filter(x=>{return x._id == views.view1.typeahead3.value})
}

if (views.view1.select1.itemIndex!=0)
{
allData = allData.filter(x=>{return x.type == views.view1.select1.items[views.view1.select1.itemIndex]})
}

if (views.view1.input2.value!=-1){
allData = allData.filter(x=>{return x.order == views.view1.input2.value})
}

if (views.view1.select2.itemIndex != 0)
{
allData = allData.filter(x=>{return x.qavat == parseInt(views.view1.select2.items[views.view1.select2.itemIndex])})
}

if (views.view1.select3.itemIndex != 0)
{
allData = allData.filter(x=>{return x.side == views.view1.select3.items[views.view1.select3.itemIndex]})
}



if (views.view1.input3.value!=-1){
allData = allData.filter(x=>{return x.capacity == views.view1.input3.value})
}


views.view1.table1.data = allData;

            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

        };
      },
      activated: function () {
        var
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

// Place here the Javascript code to be executed in the "Show" event of the "view1" app view
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List







      },
      deactivated: function () {
        var
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
      }
    });
  });
});


Vue.filter('uppercase', function (value) {
  if (value) {
    value = value.toString();
    return value.toUpperCase();
  }
});

Vue.filter('lowercase', function (value) {
  if (value) {
    value = value.toString();
    return value.toLowerCase();
  }
});

window.appStore = new Vuex.Store({
  state: {}
});

window.app = new Vue({

  router: new VueRouter({routes: [
    
    { path: '/view1', alias: '*', name: 'view1', component: window.appViews.view1, props: function (route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } }
  ]}),

  created: function () {
    window.app = this;
	this._setupDialogs();
    this._setupAppHtml();
    this._setupAppEvents();
    this._setupAppVariables();
    this._setupAppPlugins();
    this._setupCordovaPlugins();
  },

  mounted: function () {
    			
  },

  data: function () {

    return {
      event: null,
      error: null,

      
      id: "com.0605AbMu",
      version: "1.0.0",
      name: "Xonalar",
      shortName: "Xonalar",
      description: "",
      authorName: "Abdumannon Shamsiyev",
      authorEmail: "Abdumannon Shamsiyev",
      authorUrl: "https://t.me/Abdumannon_Shamsiyev",
      language: "uz",
      languageName: "Uzbek",
      textDirection: "ltr",
      style: "scaled",
      buildNumber: 0,
      theme: "default",
      themes: ["default"],
      sidebar: {
        item: {
          index: -1,
          subindex: -1
        },
        header: "",
        direction: "left",
        headerKind: "none",
        headerAlign: "left",
        imageUrl: "",
        items: [],
        itemClickHandler: this._appEventOnSidebarItemClick,
        headerClickHandler: this._appEventOnSidebarHeaderClick
      },
      alert: {
        body: "",
        kind: "",
        title: "",
        buttons: [],
        closeCallback: function () {}
      },
      internal: {
        dialogs: [],
        lastSound: null,
        activeDialog: null,
        dabdialogs: [],
        defaultLanguage: "uz",
      },
    };
  },

  computed: {
    
    store: function () {
      return window.appStore.state;
    },
    
    viewTransitionName: function () {
      return app._getCurrentView().transitionName !== '' ? 'name' : null;
    },
    
    viewTransitionMode: function () {
      return app._getCurrentView().transitionMode !== '' ? 'mode' : null;
    },
    
    viewInAnimation: function () {
      return app._getCurrentView().inAnimation !== '' ? 'enter-active-class' : null;
    },
    
    viewOutAnimation: function () {
      return app._getCurrentView().outAnimation !== '' ? 'leave-active-class' : null;
    }    
  },

  methods: {

    // Public app variables related methods

    setVar: function (varName, varValue) {
      this.$set(this.store, varName, varValue);
    },

    // Public app views related methods

    showView: function (viewName) {
      this.$router.push(viewName);
    },

    replaceView: function (viewName) {
      this.$router.replace(viewName);
    },

    // Public app dialogs related methods

    showDialog: function (dialogName) {
	  var modal = new bootstrap.Modal(window.document.getElementById(dialogName), {
        keyboard: false,
		backdrop: 'static'
      });
      modal.show();	  
    },

    hideDialog: function (dialogName) {
      var elem = window.document.getElementById(dialogName);
      var modal = bootstrap.Modal.getInstance(elem);
      modal.hide();		  
    },

    hideDialogs: function () {
	  var modals = window.document.querySelectorAll('.app-dialog.modal');
	  for (var i = 0; i < modals.length; i++) {
	    var modal = bootstrap.Modal.getInstance(modals[i]);
		modal.hide();
	  }
    },
	
	// Public app alert related methods
	
	showAlert: function (body, title, kind, buttons, closeCallback) {
		
      app.alert.kind = kind || '';
      app.alert.title = title || '';
      app.alert.body = body || '';
      app.alert.buttons = buttons || false;
      app.alert.closeCallback = closeCallback || function () {};		

	  var modal = new bootstrap.Modal(window.document.getElementById('dab-alert-modal'), {
        keyboard: false,
		backdrop: 'static'		  
	  });
	  var elem = window.document.getElementById('dab-alert-modal');
      elem.addEventListener('hidePrevented.bs.modal', function () {
		if (!app.alert.buttons || app.alert.buttons.length === 0) {
	      modal.hide();		  
		}  
      });
      modal.show(); 	
	},	
	
	hideAlert: function () {
	  var elem = window.document.getElementById('dab-alert-modal');	
	  var modal = bootstrap.Modal.getInstance(elem);
	  modal.hide();
	},
	
	// Public app sidebar related methods
	
	showSidebar: function () {
      $('#dab-sidebar').addClass('active');
      $('#dab-sidebar-overlay').addClass('active');		
	},
	
	hideSidebar: function () {
      $('#dab-sidebar').removeClass('active');
      $('#dab-sidebar-overlay').removeClass('active');		
	},	
	
 	sidebarIsVisible: function () {
      return $('#dab-sidebar').hasClass('active');		
	},
	
 	sidebarSetDirection: function (direction) {
	  if (app.sidebar.direction === direction) {
	    return app.sidebar.direction;	  
	  }		  
      app.sidebar.direction = direction;
      if (direction === 'right') {
        var 
          css = '#dab-sidebar { left: initial; right: -280px; }\
		         #dab-sidebar.active { left: initial; right: 0; }',
          style = document.createElement('style');
        document.head.appendChild(style);
        style.type = 'text/css';
	    style.id = 'sidebar-stylesheet';
        style.appendChild(document.createTextNode(css));		
	  } else {
	    if ($('#sidebar-stylesheet').length > 0) {
          $('#sidebar-stylesheet').remove();
		}	  
	  }
	  return app.sidebar.direction; 
	},	

    // Public app toasts related methods

    showToast: function (text, hideMsecs, kind, title,
     subtitle, clickCallback, dismissCallback, payload) {
      var
        toastId = this.randomStr(),
        toasts = this._getToastsComponent();
      toasts.toasts.push({
        "text": text,
        "id": toastId,
        "title": title || '',
        "kind": kind || 'light',
        "payload": payload || null,
        "subtitle": subtitle || '',
        "clickCallback": clickCallback || function () {},
        "dismissCallback": dismissCallback || function () {}
      });
      if (hideMsecs) {
        window.setTimeout(function () {
          for (var i in toasts.toasts) {
            if (toasts.toasts[i].id === toastId) {
              toasts.toasts.splice(i, 1);
            }
          }
        }, hideMsecs);
      }
      return toastId;
    },

    hideToast: function (toastId) {
      var
        toasts = this._getToastsComponent();
      for (var i in toasts.toasts) {
        if (toasts.toasts[i].id === toastId) {
          toasts.toasts.splice(i, 1);
        }
      }
    },

    hideToasts: function () {
      var
        toasts = this._getToastsComponent();
      toasts.toasts = [];
    },

    getToast: function (toastId) {
      var
        toasts = this._getToastsComponent();
      for (var i in toasts.toasts) {
        if (toasts.toasts[i].id === toastId) {
          return toasts.toasts[i];
        }
      }
      return null;
    },

    getToasts: function () {
      var
        toasts = this._getToastsComponent();
      return toasts.toasts;
    },
	
	// Public app local storage related methods
	
	setOption: function (key, value) {
      return localStorage.setItem(key, value);		
	},
	
	getOption: function (key, defaultValue) {
      return localStorage.getItem(key) !== null ? 
	   localStorage.getItem(key) : defaultValue;		
	},

	removeOption: function (key) {
      return localStorage.removeItem(key);
	},	
	
	clearOptions: function () {
      return localStorage.clear();
	},		

    // Public app controls related methods

    focusControl: function (controlName) {
      $('#' + controlName).focus();
    },

    // Public app themes related methods

    setAppTheme: function (themeName) {
      var
	    lowerThemeName = themeName.toLowerCase();
	  
      if (this.themes.indexOf(lowerThemeName) === -1) {
	    return false;		  
	  }	  

      $('body').removeClass(this.theme);
      this.theme = lowerThemeName;      	  
      $('#app-theme').attr('href', 'app/styles/' + lowerThemeName + '.css');
	  $('body').addClass(this.theme);	  	  
	  return lowerThemeName;
    },

    setAppFixedStyle: function () {
      this.style = 'fixed';
      $('#app-style').attr('href', 'app/styles/fixed.css');
    },

    setAppScaledStyle: function () {
      this.style = 'scaled';
      $('#app-style').attr('href', 'app/styles/scaled.css');
    },

    setAppTextDirection: function (textDirection) {
      var
        html = document.getElementsByTagName('html')[0];
      this.textDirection = textDirection;
      html.setAttribute('dir', textDirection);
    },
	
	getAppColorScheme: function() {
	  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';	
	},

    // Public app device related methods

    setViewReadyForDeviceKeyboard: function () {
	  var
	    self = this;
      document.addEventListener('deviceready', function () {
        $('#' + self._getCurrentView().name).css({
          "margin-top": '0px',
          "height": window.innerHeight + 'px'
        });		  
	  });	
    },
	
    setDialogReadyForDeviceKeyboard: function () {
	  var
	    self = this;
      document.addEventListener('deviceready', function () {
        $('#' + self._getCurrentView().name + ' .modal-content').css({
          "margin-top": '0px',
          "height": window.innerHeight + 'px'
        });		  
	  });	
    },	

    // Public app Web Extensions related methods

    webExtensionSendMessageToActiveTab: function (message, callback) {
      if (window.chrome) {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, message, callback);
        });
      }
    },
	
    webExtensionSendMessageToAllTabs: function (message, callback) {
      if (window.chrome) {
        chrome.tabs.query({}, function(tabs) {
          for (var i=0; i<tabs.length; ++i) {
            chrome.tabs.sendMessage(tabs[i].id, message, callback);
          }
        });
      }
    },	

    // Public app strings related methods

    strLen: function (text) {
      return text.length;
    },

    trimStr: function (text) {
      return text.trim();
    },

    lowerCase: function (text) {
      return text.toLowerCase();
    },

    upperCase: function (text) {
      return text.toUpperCase();
    },

    strSearch: function (text, query) {
      return text.search(query);
    },

    subStr: function (text, start, count) {
      return text.substr(start, count);
    },

    strReplace: function (text, from, to) {
      return text.replace(from, to);
    },

    strReplaceAll: function (text, from, to) {
      return text.split(from).join(to);
    },

    splitStr: function (text, separator, limit) {
      return text.split(separator, limit);
    },

    strToBase64: function (text) {
      return window.Base64.encode(text);
    },

    base64ToStr: function (text) {
      return window.Base64.decode(text);
    },

    serialize: function (value) {
      return JSON.stringify(value);
    },

    unserialize: function (text) {
      return JSON.parse(text);
    },

    randomStr: function (length) {
      var
        result = '',
        length = length || 10,
        charsMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        mapLength = charsMap.length;
      for (var i = 0; i < length; i++) {
        result += charsMap.charAt(Math.floor(Math.random() * mapLength));
      }
      return result;
    },
	
	// Public app numbers related methods
	
	randomNum: function (maxNum) {
	  maxNum = maxNum || 100;
	  return Math.floor(Math.random() * maxNum);	
	},

    // Public app sound related methods

    beep: function () {
      this.playSound(
        'app/audios/beep/beep.mp3',
        'app/audios/beep/beep.ogg'
      );
    },

    playSound: function (mp3Url, oggUrl) {
      if (this.internal.lastSound === null) {
        this.internal.lastSound = new Audio();
      }
      if (this.internal.lastSound.canPlayType('audio/ogg') !== '') {
        this.internal.lastSound.src = oggUrl;
        this.internal.lastSound.type = 'audio/ogg';
      } else {
        this.internal.lastSound.src = mp3Url;
        this.internal.lastSound.type = 'audio/mpeg';		  
      }
      this.internal.lastSound.play();
	  return this.internal.lastSound;
    },

    stopSound: function () {
      this.internal.lastSound.pause();
      this.internal.lastSound.currentTime = 0;
    },
	
	// Public app resources related methods
	
	resource: function (name) {
      if (!window.appLangs[this.language]) {
        return window.appLangs[this.internal.defaultLanguage].resources[name];
      } else {
        return window.appLangs[this.language]['resources'][name] !== undefined ?
          window.appLangs[this.language]['resources'][name] :
		  window.appLangs[this.internal.defaultLanguage].resources[name];
      }
	},

    // Public app languages related methods

    translateView: function () {
      return this._translateView();
	},
	
	getLanguages: function () {
	  var
	    result = [];
	  for (var i in window.appLangs) {
	    result.push({code: i, name: window.appLangs[i].language.name});	  
	  }  	
	  return result;
	},
	
	getLanguagesNames: function () {
	  var
        result = [];	  
      for (var i in window.appLangs) {
	    result.push(window.appLangs[i].language.name);	  
	  }
	  return result;
	},	
	
	getLanguagesCodes: function () {
	  var
        result = [];	  
      for (var i in window.appLangs) {
	    result.push(i);	  
	  }
	  return result;
	},		
	
	getLanguageCodeFromName: function (name) {
	  var
        result = '';	  
      for (var i in window.appLangs) {
	    if (window.appLangs[i].language.name === name) {
		  result = i;
          break;		  
		}	  
	  }
	  return result;
	},	
	
	getLanguageNameFromCode: function (code) {
	  var
        result = '';	  
      for (var i in window.appLangs) {
	    if (i === code) {
		  result = window.appLangs[i].language.name;
          break;		  
		}	  
	  }
	  return result;
	},

    
    checkNull: function (data) {
      var
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
let b = true;
for (x in data) {
if (data[x] == null) {
b = false;
break;
}
}
return b;

    },

    updateTableData: function () {
      var
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
console.log("updating")
app.hideDialog("dialog1");
app.plugins.decsoft.blockui.block("Biroz Kuting...");
views.view1.http1.execute();


    },

    openItem: function (data) {
      var
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();

app.store.updatingData = data;
dialogs.dialog1.select6.itemIndex = dialogs.dialog1.select6.items.findIndex(x=>{return x==data.type})
dialogs.dialog1.input1.value = data.order;
dialogs.dialog1.select4.itemIndex = dialogs.dialog1.select4.items.findIndex(x=>{return x==data.qavat});
dialogs.dialog1.select5.itemIndex =dialogs.dialog1.select5.items.findIndex(x=>{return x==data.side});
dialogs.dialog1.input3.value = data.capacity;
dialogs.dialog1.label7.text = data._id;
dialogs.dialog1.label7.hidden = false;
dialogs.dialog1.label2.hidden = false;
dialogs.dialog1.button2.hidden = false;
dialogs.dialog1.button1.hidden = false;

dialogs.dialog1.button3.hidden = true;
dialogs.dialog1.button4.hidden = true;



app.showDialog("dialog1");

    },

	
    // Internal / Private app methods

    _appEventOnResize: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },
	
    _appEventOnMessage: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },		
	
    _appEventOnContextMenu: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },	

    _appEventOnColorSchemeChange: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnOnline: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnOffline: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnDomReady: function () {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      
// Place here the Javascript code to be executed in the "DomReady" event of the "New App 1" app
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List


app.plugins.decsoft.blockui.block("Biroz kuting...");
views.view1.http1.execute();

    },

    _appEventOnBatteryStatus: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      self.cordova.battery.level = event.level;
      self.cordova.battery.isPlugged = event.isPlugged;
      
    },

    _appEventOnBatteryLow: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      self.cordova.battery.level = event.level;
      self.cordova.battery.isPlugged = event.isPlugged;
      
    },

    _appEventOnBatteryCritical: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      self.cordova.battery.level = event.level;
      self.cordova.battery.isPlugged = event.isPlugged;
      
    },

    _appEventOnDeviceReady: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;

      window.addEventListener('online', self._appEventOnOnline);
      window.addEventListener('offline', self._appEventOnOffline);
      window.addEventListener('batterylow', self._appEventOnBatteryLow);
      window.addEventListener('batterystatus', self._appEventOnBatteryStatus);
      window.addEventListener('batterycritical', self._appEventOnBatteryCritical);
      window.addEventListener('orientationchange', self._appEventOnOrientationChange);
      document.addEventListener('pause', self._appEventOnPause);
      document.addEventListener('resume', self._appEventOnResume);
       
       
       
      
    },

    _appEventOnPause: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnResume: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnBackButton: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnOrientationChange: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnVolumeUpButton: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnVolumeDownButton: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnClick: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnDblClick: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventSwipeRight: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventSwipeLeft: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnKeyUp: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnKeyDown: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnMouseUp: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnMouseDown: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnMouseMove: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnChromeRuntimeMessage: function (message) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      
    },

    _appEventOnRenderError: function (error, vm, info) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      self.error = {"message": error, "vm": vm, "info": info};

      window.console.error(self.error.message, self.error.info);

      self.error = null;
    },

    _appEventOnJavascriptError: function (errorMsg, url, lineNumber) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      self.error = {"message": errorMsg, "url": url, "lineNumber": lineNumber};

      window.console.error(self.error.message, self.error.url, self.error.lineNumber);

      self.error = null;
    },

    _appEventViewChange: function (to, from) {
	  if (to.name === from.name) {
	    return;	  
	  }	
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = {
        "nextViewName": to.name,
        "prevViewName": from.name
      };
      
    },

    _appEventOnSidebarItemClick: function (event, item, index, subindex) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
	  self.event = event;
      self.sidebar.item = item;
	  self.sidebar.item.index = index;
	  self.sidebar.item.subindex = subindex;
      
    },		
	
    _appEventOnSidebarHeaderClick: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
	  self.event = event;	
      
    },	

    _setupAppEvents: function () {
      this._setupAppErrorsEvents();
      this._setupAppWindowEvents();
      this._setupAppDocumentEvents();
      this._setupAppHammerEvents();
      this._setupAppDeviceEvents();
      this._setupAppRouterEvents();
      this._setupAppChromeEvents();
    },

    _setupAppErrorsEvents: function () {
      Vue.config.errorHandler = this._appEventOnRenderError;
      window.addEventListener('error', this._appEventOnJavascriptError);
    },

    _setupAppWindowEvents: function () {
      window.addEventListener('resize', this._appEventOnResize);
      window.addEventListener('message', this._appEventOnMessage);
      window.addEventListener('contextmenu', this._appEventOnContextMenu);	
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this._appEventOnColorSchemeChange);	  
    },

    _setupAppDocumentEvents: function () {
      var self = this;
      $(self._appEventOnDomReady);  
      document.addEventListener('click', this._appEventOnClick);
      document.addEventListener('dblclick', this._appEventOnDblClick);
      document.addEventListener('keyup', this._appEventOnKeyUp);
      document.addEventListener('keydown', this._appEventOnKeyDown);
      document.addEventListener('mouseup', this._appEventOnMouseUp);
      document.addEventListener('mousedown', this._appEventOnMouseDown);
      document.addEventListener('mousemove', this._appEventOnMouseMove);
    },

    _setupAppHammerEvents: function () {
      var
        ha = new Hammer(document.body);
	  ha.get('swipe').set({direction: Hammer.DIRECTION_HORIZONTAL});	
      ha.on('swiperight', this._appEventSwipeRight);
      ha.on('swipeleft', this._appEventSwipeLeft);
    },

    _setupAppDeviceEvents: function () {
      document.addEventListener('deviceready', this._appEventOnDeviceReady);
    },

    _setupAppRouterEvents: function () {
      var
              self = this;
      this.$router.beforeEach(function (to, from, next) {
        next(self._appEventViewChange(to, from));
      });
    },

    _setupAppChromeEvents: function () {
      if (window.chrome && chrome.runtime && chrome.runtime.onMessage) {
        chrome.runtime.onMessage.addListener(
         this._appEventOnChromeRuntimeMessage);
      }
    },

    _getControlByName: function (parent, name) {
      for (var i in parent.$children) {
        if (parent.$children[i].name === '') {
          continue;
        }
        if (name === parent.$children[i].name) {
          return parent.$children[i];
        }
        if (parent.$children[i].$children.length > 0) {
          var
            result = this._getControlByName(parent.$children[i], name);
          if (result && result.name && result.name === name) {
            return result;
          }
        }
      }
    },

    _getCurrentViewControlByName: function (name) {
      return this._getControlByName(this._getCurrentView(), name);
    },

    _getCurrentView: function () {
      if (this.internal.activeDialog !== null) {
        return this.internal.activeDialog;
      }

      for (var i in this.$children) {
        if (this.$route.name === this.$children[i].name) {
          return this.$children[i];
        }
      }
      return null;
    },

    _getLoadedFrames: function () {
      return window.appFrames;
    },

    _getLoadedViews: function () {
      var
        result = [];
      for (var i in this.$children) {
        result[this.$children[i].name] = this.$children[i];
      }
      return result;
    },

    _getLoadedDialogs: function () {
      var
        result = [];
      for (var i in this.internal.dialogs.$children) {
        if (this.internal.dabdialogs.indexOf(this.internal.dialogs.$children[i].$el.id) !== -1) {
          continue;
        }
        result[this.internal.dialogs.$children[i].name] = this.internal.dialogs.$children[i];
      }
      return result;
    },

    _getActiveDialog: function () {
      this.internal.activeDialog = null;
      var
        activeModals = $($('.modal.show').get().reverse());
      if (activeModals.length > 0) {
        for (var i = 0; i < this.internal.dialogs.$children.length; i++) {
          if (this.internal.dabdialogs.indexOf(this.internal.dialogs.$children[i].$el.id) !== -1) {
            continue;
          }
          if (this.internal.dialogs.$children[i].$el.id === $($('.modal.show').get().reverse())[0].id) {
            this.internal.activeDialog = this.internal.dialogs.$children[i];
            break;
          }
        }
      }
      return this.internal.activeDialog;
    },

    _getToastsComponent: function () {
      for (var i in app.internal.dialogs.$children) {
        if (app.internal.dialogs.$children[i].$el.id === 'dab-toasts-wrapper') {
          return app.internal.dialogs.$children[i];
        }
      }
      return null;
    },

    _transformHttpRequest: function (http) {
      if (http.contentType === 'application/json') {
        return JSON.stringify(http.data);
      } else if (http.contentType === 'application/x-www-form-urlencoded') {
        var
          result = [];
        for (var key in http.data) {
          result.push(encodeURIComponent(key) + '=' + encodeURIComponent(http.data[key]));
        }
        return result.join('&');
      } else if (http.contentType === false ||
       http.contentType === 'multipart/form-data') {
        var
          result = new FormData();
        for (var key in http.data) {
          result.append(key, http.data[key]);
        }
        return result;
      } else {
        return http.data;
      }
    },

    _translateFrames: function () {
      for (var frame in window.appFrames) {
        for (var control in window.appFrames[frame]) {
          for (var property in window.appFrames[frame][control]) {
            var
              origProp = property + '_default';
            if (this.language === this.internal.defaultLanguage) {
              if (window.appFrames[frame][control][origProp] !== undefined) {
                window.appFrames[frame][control][property] =
                 window.appFrames[frame][control][origProp];
              }
              continue;
            }
            if (window.appLangs[this.language] && window.appLangs[this.language]['frames'] &&
             window.appLangs[this.language]['frames'][frame] && window.appLangs[this.language]['frames'][frame][control] &&
              window.appLangs[this.language]['frames'][frame][control][property]) {
			   if (window.appFrames[frame][control][origProp] === undefined) { 	  
                 window.appFrames[frame][control][origProp] =
                  window.appFrames[frame][control][property];
			   }
               window.appFrames[frame][control][property] =
                window.appLangs[this.language]['frames'][frame][control][property];
            }
          }
        }
      }
    },
	
	_translateSidebar: function () {
      if (window.appLangs[this.language] && window.appLangs[this.language].sidebar) {
		if (window.appLangs[this.language].sidebar['header'] !== undefined) {
          this.sidebar.header = window.appLangs[this.language].sidebar.header;
		}		
		if (window.appLangs[this.language].sidebar['imageUrl'] !== undefined) {
          this.sidebar.imageUrl = window.appLangs[this.language].sidebar.imageUrl;
		}		
		if (window.appLangs[this.language].sidebar['items'] !== undefined) {
          this.sidebar.items = window.appLangs[this.language].sidebar.items;
		}		
      }	  	  		
	},

    _translateView: function () {
	  var
	    view = this._getCurrentView();
      this._translateFrames();
      this._translateSidebar(); 
      for (var control in view) {
        for (var property in view[control]) {
          var
            origProp = property + '_default';
          if (this.language === this.internal.defaultLanguage) {
            if (view[control][origProp] !== undefined) {
              view[control][property] = view[control][origProp];
            }
            continue;
          }
          if (window.appLangs[this.language] && window.appLangs[this.language]['views'] &&
           window.appLangs[this.language]['views'][view.name] && window.appLangs[this.language]['views'][view.name][control] &&
            window.appLangs[this.language]['views'][view.name][control][property]) {
             if (view[control][origProp] === undefined) {
			   view[control][origProp] = view[control][property];
			 }
             view[control][property] = window.appLangs[this.language]['views'][view.name][control][property];
          }
        }
      }
    },

    _setViewEvents: function (view) {
      if (view._with_event_listeners) {
        return true;
      }
      var
        el = document.getElementById(view.name),
        ha = new Hammer(el);
      el.addEventListener('click', view.clickHandler);
      el.addEventListener('dblclick', view.dblclickHandler);
      el.addEventListener('mouseup', view.mouseupHandler);
      el.addEventListener('mousedown', view.mousedownHandler);
      el.addEventListener('mousemove', view.mousemoveHandler);
      el.addEventListener('mouseenter', view.mouseenterHandler);
      el.addEventListener('mouseleave', view.mouseleaveHandler);
      el.addEventListener('contextmenu', view.contextmenuHandler);
	  ha.get('swipe').set({direction: Hammer.DIRECTION_HORIZONTAL});
      ha.on('swiperight', view.swipeRightHandler);
      ha.on('swipeleft', view.swipeLeftHandler);
      view._with_event_listeners = true;
    },
	
	_setupDialogs: function () {
	  this.internal.dialogs = new Vue().$mount('#dialogs');	
	},

    _setupAppHtml: function () {
      var
        html = document.getElementsByTagName('html')[0],
		body = document.getElementsByTagName('body')[0],
        title = document.getElementsByTagName('title')[0];
      title.innerText = this.name;
	  body.classList.add(this.theme);
      html.setAttribute('dir', this.textDirection);
      html.setAttribute('lang', this.language);
    },

    _setupAppVariables: function () {
	  this.query = false;
      this.navbarStyle = {dark: 'dark', light: 'light'};
      this.size = {sm: 'sm', md: 'md', lg: 'lg', xl: 'xl'};
      this.tableStyle = {none: '', dark: 'dark', light: 'light'};
	  this.align = {left: "left", center: "center", right: "right"};
      this.dropdownItem = {item: 'item', header: 'header', divider: 'divider'};
      this.dropdownDir = {up: 'dropup', down: 'dropdown', right: 'dropright'};
      this.httpMethod = {get: 'GET', post: 'POST', put: 'PUT', head: 'HEAD', "delete": 'DELETE'};
      this.navbarPos = {fixedTop: 'fixed-top', fixedBottom: 'fixed-bottom', stickyTop: 'sticky-top'};
      this.imageFit = {fill: 'fill', none: 'none', cover: 'cover', revert: 'revert', contain: 'contain', scaleDown: 'scale-down'};
      this.kind = {link: 'link', dark: 'dark', info: 'info', light: 'light', danger: 'danger', primary: 'primary', warning: 'warning', success: 'success', secondary: 'secondary'};
      this.inAnimation = {bounceIn: 'bounceIn', bounceInDown: 'bounceInDown', bounceInLeft: 'bounceInLeft', bounceInRight: 'bounceInRight', bounceInUp: 'bounceInUp', fadeIn: 'fadeIn', fadeInDown: 'fadeInDown', fadeInDownBig: 'fadeInDownBig', fadeInLeft: 'fadeInLeft', fadeInLeftBig: 'fadeInLeftBig', fadeInRight: 'fadeInRight', fadeInRightBig: 'fadeInRightBig', fadeInUp: 'fadeInUp', fadeInUpBig: 'fadeInUpBig', fadeInTopLeft: 'fadeInTopLeft', fadeInTopRight: 'fadeInTopRight', fadeInBottomLeft: 'fadeInBottomLeft', fadeInBottomRight: 'fadeInBottomRight', flipInX: 'flipInX', flipInY: 'flipInY', lightSpeedIn: 'lightSpeedIn', lightSpeedInRight: 'lightSpeedInRight', lightSpeedInLeft: 'lightSpeedInLeft', rollIn: 'rollIn', rotateIn: 'rotateIn', rotateInDownLeft: 'rotateInDownLeft', rotateInDownRight: 'rotateInDownRight', rotateInUpLeft: 'rotateInUpLeft', rotateInUpRight: 'rotateInUpRight', zoomIn: 'zoomIn', zoomInDown: 'zoomInDown', zoomInLeft: 'zoomInLeft', zoomInRight: 'zoomInRight', zoomInUp: 'zoomInUp', bounce: 'bounce', flash: 'flash', pulse: 'pulse', rubberBand: 'rubberBand', shake: 'shake', swing: 'swing', tada: 'tada', wobble: 'wobble', jello: 'jello'};
      this.outAnimation = {bounceOut: 'bounceOut', bounceOutDown: 'bounceOutDown', bounceOutLeft: 'bounceOutLeft', bounceOutRight: 'bounceOutRight', bounceOutUp: 'bounceOutUp', fadeOut: 'fadeOut', fadeOutDown: 'fadeOutDown', fadeOutDownBig: 'fadeOutDownBig', fadeOutLeft: 'fadeOutLeft', fadeOutLeftBig: 'fadeOutLeftBig', fadeOutRight: 'fadeOutRight', fadeOutRightBig: 'fadeOutRightBig', fadeOutUp: 'fadeOutUp', fadeOutUpBig: 'fadeOutUpBig', fadeOutTopLeft: 'fadeOutTopLeft', fadeOutTopRight: 'fadeOutTopRight', fadeOutBottomRight: 'fadeOutBottomRight', fadeOutBottomLeft: 'fadeOutBottomLeft', flipOutX: 'flipOutX', flipOutY: 'flipOutY', lightSpeedOut: 'lightSpeedOut', lightSpeedOutRight: 'lightSpeedOutRight', lightSpeedOutLeft: 'lightSpeedOutLeft', rollOut: 'rollOut', rotateOut: 'rotateOut', rotateOutDownLeft: 'rotateOutDownLeft', rotateOutDownRight: 'rotateOutDownRight', rotateOutUpLeft: 'rotateOutUpLeft', rotateOutUpRight: 'rotateOutUpRight', slideOutUp: 'slideOutUp', slideOutDown: 'slideOutDown', slideOutLeft: 'slideOutLeft', slideOutRight: 'slideOutRight', zoomOut: 'zoomOut', zoomOutDown: 'zoomOutDown', zoomOutLeft: 'zoomOutLeft', zoomOutRight: 'zoomOutRight', zoomOutUp: 'zoomOutUp', backOutDown: 'backOutDown', backOutLeft: 'backOutLeft', backOutRight: 'backOutRight', backOutUp: 'backOutUp', bounce: 'bounce', flash: 'flash', pulse: 'pulse', rubberBand: 'rubberBand', shake: 'shake', swing: 'swing', tada: 'tada', wobble: 'wobble', jello: 'jello', hinge: 'hinge'};
    },
	
	_setupAppPlugins: function () {
      var
        app = this;		
      this.plugins = {};       		
	  app.plugins.decsoft =
  app.plugins.decsoft ? 
  app.plugins.decsoft : {};

app.plugins.decsoft.blockui = {

  template: '<div id="decsoft-blockui-overlay" class="d-flex h-100 w-100">\
              <div class="align-self-center w-100 animated fadeIn">\
               <div id="decsoft-blockui-container" class="text-center">\
			    __CONTENTS__\
               </div>\
              </div>\
             </div>',

  block: function (message, autoUnblockMs, unblockedCallback) {
	  
	autoUnblockMs = autoUnblockMs || false;
	unblockedCallback = unblockedCallback || null;
	message = message || '<div class="spinner-grow"></div>';  
	
    $('#decsoft-blockui-overlay').remove();  
    $('body').append(this.template.replace(/__CONTENTS__/, message));			  
	
	if (autoUnblockMs !== false) {
      window.setTimeout(function () {
		$('#decsoft-blockui-overlay').remove();  
	    if (unblockedCallback !== null) {
		  unblockedCallback();	
		}  
	  }, autoUnblockMs);	
	}
  },
  
  unblock: function () {
    $('#decsoft-blockui-overlay').remove();
  }  
};


	},

    _setupCordovaPlugins: function () {
      var
        app = this;
      this.cordova = {};
      
    }
  }
})
.$mount('#app');
