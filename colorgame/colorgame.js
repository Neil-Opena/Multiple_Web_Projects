var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var goalColor = pickColor();
var colorDisplay = document.querySelector("h1 span");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset(numSquares);
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			for(var j = 0; j < modeButtons.length; j++){
				modeButtons[j].classList.remove("selected");
			}
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numSquares = 3;
			}else if(this.textContent === "Hard"){
				numSquares = 6;
			}else{
				numSquares = 6;
			}
			reset(numSquares);
		});
	}
}

function setUpSquares(){
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
}

function reset(num){
	resetBtn.textContent = "New Colors";
	colors = generateRandomColors(num);
	goalColor = pickColor();
	colorDisplay.textContent = goalColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	for(var j = 0; j < squares.length; j++){
		squares[j].style.display = "block";
	}
	for(var j = num; j < squares.length; j++){
		squares[j].style.display = "none";
	}
}

resetBtn.addEventListener("click",function(){
	reset(numSquares);
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