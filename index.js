let randomNumber = Math.floor(Math.random() * 3);
function randomWinnerFirstButton() {
	if (randomNumber == 0) {
		document.getElementById("firstButton").innerHTML = "You win!";
	} else {
		document.getElementById("firstButton").innerHTML = "Try again!";
	}
}
function randomWinnerSecondButton() {
	if (randomNumber == 1) {
		document.getElementById("secondButton").innerHTML = "You win!";
	} else {
		document.getElementById("secondButton").innerHTML = "Try again!";
	}
}
function randomWinnerThirdButton() {
	if (randomNumber == 2) {
		document.getElementById("thirdButton").innerHTML = "You win!";
	} else {
		document.getElementById("thirdButton").innerHTML = "Try again!";
	}
}
