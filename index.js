function randomWinner0() {
	let randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber == 0) {
		document.getElementById("displayText").innerHTML = "You win!";
	} else {
		document.getElementById("displayText").innerHTML = "Try again!";
	}
}
function randomWinner1() {
	let randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber == 1) {
		document.getElementById("displayText").innerHTML = "You win!";
	} else {
		document.getElementById("displayText").innerHTML = "Try again!";
	}
}
function randomWinner2() {
	let randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber == 2) {
		document.getElementById("displayText").innerHTML = "You win!";
	} else {
		document.getElementById("displayText").innerHTML = "Try again!";
	}
}