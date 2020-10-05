var numberOfSquare = 6;

var colors = generateRndColor(numberOfSquare);

var squares = document.querySelectorAll(".square");

var pickColor = pickColorRnd();

var colorDisplay = document.getElementById("colorDisplay");


var messageDisplay = document.getElementById("message");

var h1 = document.querySelector("h1");

var resetButton = document.getElementById("reset");

var modeButton = document.querySelectorAll(".mode");

init();

function init() {

	setUpModeButton()
	
	setUpSquare();

	reset();

}

function setUpModeButton() {
	// mode buttom
	for(var i = 0; i < modeButton.length; i++) {
		modeButton[i].addEventListener("click", function() {
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent == "Easy") {
				numberOfSquare = 3;
			}
			else {
				numberOfSquare = 6
			}
			reset();
		});
	}
}

function setUpSquare() {
	for(var i = 0; i < squares.length; i++) {
		// initial square color
		squares[i].style.backgroundColor = colors[i];
	
		squares[i].addEventListener("click", function() {
			var clickColor = this.style.backgroundColor;
			if(clickColor === pickColor) {
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?";
				changeColor(clickColor);
			}
			else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});	
	}
}



function reset() {
	// pick new color again
	colors = generateRndColor(numberOfSquare);
	// pick new target color in these square;
	pickColor = pickColorRnd();
	colorDisplay.textContent = pickColor;
	resetButton.textContent = "New Color";
	messageDisplay.textContent = "";

	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	
	h1.style.backgroundColor = "steelblue";
	
}

colorDisplay.textContent = pickColor;

resetButton.addEventListener("click", function() {
	reset();
});


// when correct change all the square color
function changeColor(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
}
// pick the target color
function pickColorRnd() {
	var rnd = Math.floor(Math.random() * colors.length);
	return colors[rnd];
}
// generate random color
function generateRndColor(num) {
	//make an array
	var arr = [];
	// add num rnd colors to arr
	for(var i = 0; i < num; i++) {
		//get rnd color and pust into array
		arr.push(randomColor());
	}
	//return arr
	return arr;
}

// random the color
function randomColor() {
	var rndRedColor = Math.floor(Math.random() * 256);
	var rndGreenColor = Math.floor(Math.random() * 256);
	var rndBlueColor = Math.floor(Math.random() * 256);
	return "rgb(" + rndRedColor + ", " + rndGreenColor + ", " +rndBlueColor +")"; 
}

