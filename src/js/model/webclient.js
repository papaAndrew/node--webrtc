

export function createWebSocket() {
  var serverUrl;
  var scheme = "ws";

  // If this is an HTTPS connection, we have to use a secure WebSocket
  // connection too, so add another "s" to the scheme.
/*
  if (document.location.protocol === "https:") {
    scheme += "s";
  }
*/  
  serverUrl = scheme + "://" + myHostname + ":6503";

  log(`Connecting to server: ${serverUrl}`);
  return new WebSocket(serverUrl, "json");
}
