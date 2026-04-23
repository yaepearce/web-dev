let topDiv = document.getElementById("top-div");
let bottomDiv = document.getElementById("bottom-div");

let isWhite = true;

function mngDarkMode(event) {
  //determine if lightmode is on
  if (isWhite) document.body.style.backgroundColor = "black";
  else document.body.style.backgroundColor = "white";
  //change background color to black if light mode, change to white if black
  if (isWhite)document.body.style.color = "white"; 
  else document.body.style.color = "black";
  
  if (isWhite) bottomDiv.innerHTML = "<p>dark mode on</p>";
    else bottomDiv.innerHTML = "<p>dark mode off</p>";
  
    // flip the isLight switch
   isWhite = !isWhite
  
  
}
