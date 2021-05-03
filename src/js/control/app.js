import { selectPhoneButtons, selectVideos } from "../view/persistent.js";



function sendDing() {

  const mediaConstraints = {
    //audio: true, // We want an audio track
    video: true // ...and we want a video track
  };

  navigator.mediaDevices.getUserMedia(mediaConstraints)
  .then((localStream) => selectVideos("video").forEach((el) => {
    
    el.srcObject = localStream;
    //localStream.getTracks().forEach(track => myPeerConnection.addTrack(track, localStream));
  })
  .catch(console.log)
  );
}

function hangUp() {

  selectVideos("video").forEach((el) => {
    el.srcObject = null;
  });
}

/**
 * отрисовка при обновлении страницы
 */
export function render() {

  const buttons = selectPhoneButtons("call");
  buttons.forEach((el) => {
    el.addEventListener("click", sendDing);
  });

   selectPhoneButtons("hup").forEach((el) => {
    el.addEventListener("click", hangUp);
  });
}