import { selectNetStatusElements } from "../view/persistent.js";

function log(text) {
  var time = new Date();

  console.log(`[${time.toLocaleTimeString()}]\t${text}`);
}


export class DingMessenger {

  _netStatus = 0;


  getNetStatus() {
    return this._netStatus;
  }   

  setNetStatus(value) {
    this._netStatus = Number(value);

    let status = this._netStatus;
    let caption = this._netStatus ? "Online" : "Offline";
    selectNetStatusElements("netstatus").forEach(element => {
      element.innerHTML = caption;

      switch (status) {
        case 0:        
          element.classList.remove("status-online");
        case 1: 
          element.classList.add("status-online");
      }
    });

    log(`Messenger is ${caption} now`);
  }


}