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

for(var i = 0; i <squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		if(this.style.backgroundColor == goalColor){
			alert("good");
		}else{
			alert("nah");
		}
	});
}

colorDisplay.textContent = goalColor;