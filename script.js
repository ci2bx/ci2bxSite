toggleText = true;
function changetext() {
  toggleText = !toggleText;
  console.log("coucou : " + toggleText)
  if (toggleText == false) {
    document.getElementById("hello").innerHTML =
      "A bientôt"
  } else {
    document.getElementById("hello").innerHTML =
      "Bienvenue"
  }
}

toggleTheme = true;

function changetheme() {
  toggleTheme = !toggleTheme;
  console.log("dark_mode:" + toggleTheme);
  if (toggleTheme == false) { //light
    document.getElementById("body").className = "light"
    document.getElementById("insta").className = "insta-light"
    document.getElementById("changetheme").innerHTML = "dark_mode"
    document.getElementById("theme").className = "light_mode"
  } else {  //dark
    document.getElementById("body").className = ""
    document.getElementById("insta").className = "insta"
    document.getElementById("changetheme").innerHTML = "light_mode"
    document.getElementById("theme").className = "dark_mode"
    document.getElementById("hello").className = "dark_mode"
  }
}

function tailleimage(nom, h, w) {
  document.getElementById(nom).style.height = h;
  document.getElementById(nom).style.width = w;
  getthefuckout(1000)
  document.getElementById(nom).style.height = "0vh";
  document.getElementById(nom).style.width = "0vw";

}

//toggle1 = false;
/*function tailleimage(nom,h,w){
  toggle1 = !toggle1;
  console.log(toggle1);
  if(toggle1==false){
    document.getElementById(nom).style.height = "0vh";
    document.getElementById(nom).style.width = "0vw";
  }else{
    document.getElementById(nom).style.height = h;
    document.getElementById(nom).style.width = w;
  }
}*/

function getthefuckout(time) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < time)
}

