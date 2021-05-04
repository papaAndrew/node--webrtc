//import "./style/style.css";

import { render, connect } from "./js/control/app.js";




/* window.onload = function(){
  navigator.webkitGetUserMedia(
    { video: true },
    getStream,
    noStream
    );
}
function getStream(stream) {
  //var url = webkitURL.createObjectURL(stream);
  video.srcObject = stream;

}
function noStream(err) {
  
}
 */
render();

setTimeout(connect, 1000);