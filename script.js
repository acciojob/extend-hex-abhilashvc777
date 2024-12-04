const extendHex = (shortHex) => {
  // write your code here
	if(shorthex[0]=="#"){
	let str = shortHex[0]+""
	for(let i=1; i<=shortHex.length-1; i++){
		for(let j=1; j<=2; j++){
			str=str+shortHex[i];
		}
	}
	return str
	} else{
		let str = ""
	for(let i=0; i<=shortHex.length-1; i++){
		for(let j=1; j<=2; j++){
			str=str+shortHex[i];
		}
	}
	return str
	}
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
