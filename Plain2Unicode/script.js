
function encode() {
	const inputData = document.getElementById('input').value;
	let outputData = "";
	
	for (let i = 0; i < inputData.length; i++) {
		outputData += inputData.charCodeAt(i).toString(16) + " ";
	}
	
	document.getElementById('output').value = outputData.substring(0, outputData.length -1);
}
