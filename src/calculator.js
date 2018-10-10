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

	var pattern = /[,\n]/;
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
