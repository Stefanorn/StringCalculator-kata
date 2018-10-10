function add(number){

	// If user inputs a emty string i will return 0
	if(number == ""){
		return 0;
	}

	// Checks if the string contains a negative numver
	// And throws an error
	var negativeNumberPatern = /-\d*/g;
	if( negativeNumberPatern.test(number) ){
		var errorString = "Negatives not allowed: ";
		number = number.match(negativeNumberPatern);
		for(var i = 0; i < number.length; i++){
			errorString += number[i] +", "
		}
		errorString = errorString.slice(0, errorString.length - 2);
		throw errorString;
	}

	// Checks if the strings contains a number greater than
	// 1000 and replaces that string with zero
	var maxNumbersPattern = /\d\d\d\d\d*/g
	number = number.replace(maxNumbersPattern,"0");

	// Declair the pattern witch i look for to split up the string
	// and checks if user whants to use their custom spliter
	// and adds that token to the pattern.
	var splitUpNumberPattern = /[,\n]/;
	if(number.includes("\\\\")){
		var inputMask = /..(.+).n(.*)/g;		
		var CaptureGroup = inputMask.exec(number);
		var newSplitToken = CaptureGroup[1];
		splitUpNumberPattern = new RegExp('[,\\n' + newSplitToken + ']' );
		number = CaptureGroup[2];
	}

	// Here i sum up the string and return a int
	if( splitUpNumberPattern.test(number) ){
		var totalSum = 0;
		
		number = number.split(splitUpNumberPattern);
		for( var i = 0; i < number.length; i++){
			totalSum += parseInt(number[i]);
		}
		return totalSum;
	}
	
	// If the useer only inputs a single number and nothing else
	// than this is the final return condition	
	return parseInt(number);
}

module.exports = add;

