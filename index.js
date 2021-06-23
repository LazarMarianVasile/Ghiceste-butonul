function randomWinner(idButton) {
	let randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber == idButton) {
		document.getElementById("text").innerHTML = "You win!";
	} else {
		document.getElementById("text").innerHTML = "Try again!<br/>The winner is Button " + randomNumber ;
	}
}
