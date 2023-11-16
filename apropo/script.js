function rick(){

  document.getElementById("body").innerHTML = "<video autoplay><source src='/rr.mp4' type='video/mp4'></video>"
  if (!document.fullscreenElement) {
  document.documentElement.requestFullscreen();
}
}