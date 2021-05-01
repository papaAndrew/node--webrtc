
window.onload = function(){
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