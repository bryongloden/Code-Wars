function decodeResistorColors(bands) {
	var arrayOneColors = bands.split(" ");
	var returnstring = "";
	var ohms = "";
	var tolerance;
	if (arrayOneColors[0] === 'black') {
		ohms += '';
	} else if (arrayOneColors[0] === 'brown') {
		ohms += '1';
	} else if (arrayOneColors[0] === 'red') {
		ohms += '2';
	} else if (arrayOneColors[0] === 'orange') {
		ohms += '3';
	} else if (arrayOneColors[0] === 'yellow') {
		ohms += '4';
	} else if (arrayOneColors[0] === 'green') {
		ohms += '5';
	} else if (arrayOneColors[0] === 'blue') {
		ohms += '6';
	} else if (arrayOneColors[0] === 'violet') {
		ohms += '7';
	} else if (arrayOneColors[0] === 'gray') {
		ohms += '8';
	} else if (arrayOneColors[0] === 'white') {
		ohms += '9';
	}
	if (arrayOneColors[1] === 'black') {
		ohms += '0';
	} else if (arrayOneColors[1] === 'brown') {
		ohms += '1';
	} else if (arrayOneColors[1] === 'red') {
		ohms += '2';
	} else if (arrayOneColors[1] === 'orange') {
		ohms += '3';
	} else if (arrayOneColors[1] === 'yellow') {
		ohms += '4';
	} else if (arrayOneColors[1] === 'green') {
		ohms += '5';
	} else if (arrayOneColors[1] === 'blue') {
		ohms += '6';
	} else if (arrayOneColors[1] === 'violet') {
		ohms += '7';
	} else if (arrayOneColors[1] === 'gray') {
		ohms += '8';
	} else if (arrayOneColors[1] === 'white') {
		ohms += '9';
	}
	var stringtonum = Number(ohms);
	if (arrayOneColors[2] === 'black') {
		stringtonum = stringtonum * Math.pow(10, 0);
	} else if (arrayOneColors[2] === 'brown') {
		stringtonum = stringtonum * Math.pow(10, 1);
	} else if (arrayOneColors[2] === 'red') {
		stringtonum = stringtonum * Math.pow(10, 2);
	} else if (arrayOneColors[2] === 'orange') {
		stringtonum = stringtonum * Math.pow(10, 3);
	} else if (arrayOneColors[2] === 'yellow') {
		stringtonum = stringtonum * Math.pow(10, 4);
	} else if (arrayOneColors[2] === 'green') {
		stringtonum = stringtonum * Math.pow(10, 5);
	} else if (arrayOneColors[2] === 'blue') {
		stringtonum = stringtonum * Math.pow(10, 6);
	} else if (arrayOneColors[2] === 'violet') {
		stringtonum = stringtonum * Math.pow(10, 7);
	} else if (arrayOneColors[2] === 'gray') {
		stringtonum = stringtonum * Math.pow(10, 8);
	} else if (arrayOneColors[2] === 'white') {
		stringtonum = stringtonum * Math.pow(10, 9);
	}
	if (stringtonum >= 1000 && stringtonum < 1000000) {
		stringtonum = stringtonum / 1000;
		ohms = stringtonum.toString();
		ohms += "k";
	} else if (stringtonum >= 1000000) {
		stringtonum = stringtonum / 1000000;
		ohms = stringtonum.toString();
		ohms += "M";
	} else {
		ohms = stringtonum.toString();
	}
	ohms += " ohms";
	if (arrayOneColors.length === 3) {
		tolerance = ', 20%';
	} else if (arrayOneColors.length === 4) {
		if (arrayOneColors[3] === 'gold') {
			tolerance = ', 5%';
		} else if (arrayOneColors[3] === 'silver') {
			tolerance = ', 10%';
		}
	}
	returnstring = ohms + tolerance;
	return returnstring;
}
