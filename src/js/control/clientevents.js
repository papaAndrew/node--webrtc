import { createWebSocket } from "../model/webclient.js"

function clientConnectionOpen (evt) {
  document.getElementById("text").disabled = false;
  document.getElementById("send").disabled = false;
};



function log(text) {
  var time = new Date();

  console.log("[" + time.toLocaleTimeString() + "] " + text);
}

export function clientConnectionMessage (event) {
  var chatBox = document.querySelector(".chatbox");
  var text = "";
  var msg = JSON.parse(event.data);
  log("Message received: ");
  console.dir(msg);

/*  
  var time = new Date(msg.date);
  var timeStr = time.toLocaleTimeString();

  switch(msg.type) {
    case "id":
      clientID = msg.id;
      setUsername();
      break;

    case "username":
      text = "<b>User <em>" + msg.name + "</em> signed in at " + timeStr + "</b><br>";
      break;

    case "message":
      text = "(" + timeStr + ") <b>" + msg.name + "</b>: " + msg.text + "<br>";
      break;

    case "rejectusername":
      myUsername = msg.name;
      text = "<b>Your username has been set to <em>" + myUsername +
        "</em> because the name you chose is in use.</b><br>";
      break;

    case "userlist":      // Received an updated user list
      handleUserlistMsg(msg);
      break;

    // Signaling messages: these messages are used to trade WebRTC
    // signaling information during negotiations leading up to a video
    // call.

    case "video-offer":  // Invitation and offer to chat
      handleVideoOfferMsg(msg);
      break;

    case "video-answer":  // Callee has answered our offer
      handleVideoAnswerMsg(msg);
      break;

    case "new-ice-candidate": // A new ICE candidate has been received
      handleNewICECandidateMsg(msg);
      break;

    case "hang-up": // The other peer has hung up the call
      handleHangUpMsg(msg);
      break;

    // Unknown message; output to console for debugging.

    default:
      log_error("Unknown message received:");
      log_error(msg);
  }

  // If there's text to insert into the chat buffer, do so now, then
  // scroll the chat panel so that the new text is visible.

  if (text.length) {
    chatBox.innerHTML += text;
    chatBox.scrollTop = chatBox.scrollHeight - chatBox.clientHeight;
  }
  */
};




