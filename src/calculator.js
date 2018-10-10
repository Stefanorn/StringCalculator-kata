function add(number){

	if(number == ""){
		return 0;
	}

	var negativeNumberMask = /-\d*/g;
	if( negativeNumberMask.test(number) ){
		var errorString = "Negatives not allowed: ";
		number = number.match(negativeNumberMask);

		for(var i = 0; i < number.length; i++){
			errorString += number[i] +", "
		}
		errorString = errorString.slice(0, errorString.length - 2);
		throw errorString;
	}

	var maxNumbersPattern = /\d\d\d\d\d*/g
	number = number.replace(maxNumbersPattern,"0");

	var pattern = /[,\n]/;
	if(number.includes("\\\\")){
		var inputMask = /..(.+).n(.*)/g;		
		var CaptureGroup = inputMask.exec(number);
		var newSplitToken = CaptureGroup[1];
		pattern = new RegExp('[,\\n' + newSplitToken + ']' );
		number = CaptureGroup[2];
	}
	if( pattern.test(number) ){
		var totalSum = 0;
		
		number = number.split(pattern);
		for( var i = 0; i < number.length; i++){
			totalSum += parseInt(number[i]);
		}
		return totalSum;
	}

	return parseInt(number);
}

module.exports = add;

