// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function roll() {
	const diceCount = Number(document.getElementById("count").value); // remember to cast to number! :)
	
	let values = [];
	
	// calculate dice values
	for (let i = 0; i < diceCount; i++) {
		values.push(getRandomInt(6) + 1 /* 1 - max, not 0 - (max - 1)*/);
	}
	
	const resultContainer = document.getElementById("result-visual");
	
	// remove previous dice faces
	while (resultContainer.firstChild) {
		resultContainer.removeChild(resultContainer.firstChild);
	}
	
	// add current dice faces
	for (let i = 0; i < diceCount; i++) {
		console.log(values);
		let dice = document.getElementById("dice-" + values[i]);
		resultContainer.appendChild(dice.cloneNode(true));
	}
	
	document.getElementById("result").value = values.join(" + ");
	
	let sum = 0;
	for (let i = 0; i < diceCount; i++) {
		sum += values[i];
	}
	
	document.getElementById("total").value = sum;
}
