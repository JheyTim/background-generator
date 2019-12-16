var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector("button");


function SetGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value + ", " 
	+ color2.value + ")";

	css.textContent = body.style.background + ";";
}

function GetRandomColor() {
  var letters = '0123456789ABCDEF';
  var newColor1 = "#";
  var newColor2 = "#"
  for (var i = 0; i < 6; i++) {
    newColor1 += letters[Math.floor(Math.random() * 16)];
  }
  for (var i = 0; i < 6; i++) {
    newColor2 += letters[Math.floor(Math.random() * 16)];
  }

  color1.value = newColor1;
  color2.value = newColor2;

  body.style.background = 
	"linear-gradient(to right, " 
	+ newColor1 + ", " 
	+ newColor2 + ")";


	css.textContent = body.style.background + ";";

}


SetGradient();


color1.addEventListener("input", SetGradient);

color2.addEventListener("input", SetGradient);

randomBtn.addEventListener("click", GetRandomColor);