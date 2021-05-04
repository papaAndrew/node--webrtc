
const serverUrl = "ws://localhost:6503";
let conn = null;

function log(text) {
  var time = new Date();

  console.log(`[${time.toLocaleTimeString()}]\t${text}`);
}

export function connectToServer(onConnect, onError) {
//  log(`Connecting to server: ${serverUrl}`);
  conn = new WebSocket(serverUrl, "json");
  conn.onopen = onConnect;
  conn.onerror = onError || log;
}

export function sendToServer(data,  onResponse, onError) {
  
  var msg = JSON.stringify(data);
  conn.onmessage = onResponse;
  conn.onerror = onError || log;
  log(`Sending message: ${msg}`);

  conn.send(msg);
}

