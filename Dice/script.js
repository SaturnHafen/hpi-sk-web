// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function roll() {
	const diceCount = document.getElementById('count').value;
	
	let values = [];
	
	// calculate dice values
	for (let i = 0; i < diceCount; i++) {
		values.push(getRandomInt(6) + 1 /* 1 - max, not 0 - (max - 1)*/);
	}
	
	const resultContainer = document.getElementById('result-visual');
	
	// remove previous dice faces
	while (resultContainer.firstChild) {
  	resultContainer.removeChild(resultContainer.firstChild);
  }
	
	// add current dice faces
	values.forEach((x, i) => {
		let dice = document.getElementById('dice-' + x);
		resultContainer.appendChild(dice.cloneNode(true));
	});
	
	document.getElementById('result').value = values.join(' + ');
}
