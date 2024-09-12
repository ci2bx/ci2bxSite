function rick(){

  document.getElementById("body").innerHTML = "<video autoplay width=100%><source src='/rr.mp4' type='video/mp4'></video>"
  if (!document.fullscreenElement) {
  document.documentElement.requestFullscreen();
}
}