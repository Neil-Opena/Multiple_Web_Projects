var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var goalColor = colors[3];
var colorDisplay = document.querySelector("h1 span");
var messageDisplay = document.getElementById("message");

for(var i = 0; i <squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		if(this.style.backgroundColor == goalColor){
			messageDisplay.textContent = "Correct!";
			changeColors(goalColor);
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

colorDisplay.textContent = goalColor;

function changeColors(color){
	for(var i = 0; squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}