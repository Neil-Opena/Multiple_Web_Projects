var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var goalColor = pickColor();
var colorDisplay = document.querySelector("h1 span");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");

for(var i = 0; i <squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		if(this.style.backgroundColor == goalColor){
			messageDisplay.textContent = "Correct!";
			h1.style.backgroundColor = goalColor;
			resetBtn.textContent = "Play Again?";
			changeColors(goalColor);
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

resetBtn.addEventListener("click",function(){
	resetBtn.textContent = "New Colors";
	colors = generateRandomColors(6);
	goalColor = pickColor();
	colorDisplay.textContent = goalColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = goalColor;

function changeColors(color){
	for(var i = 0; squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num){
	var myArray = [];
	for(var i = 0; i < num; i++){
		myArray.push(randomColor());
	}

	return myArray;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}