function add(number){

	var pattern = /[,\n]/;
	var negativeNumberMask = /-\d*/g;

	if( negativeNumberMask.test(number) ){

		number = number.match(negativeNumberMask);
		var derp = "";
		for(var i = 0; i < number.length; i++){
			derp += number[i] +", "
		}
		derp = derp.slice(0, derp.length - 2);
		throw "Negatives not allowed: " + derp;
	}

	if(number == ""){
		return 0;
	}
	else if( pattern.test(number) ){
		var totalSum = 0;
		number = number.split(pattern);
		for( var i = 0; i < number.length; i++){

			if(parseInt(number) < 0){
				throw "Negatives not allowed: " + number[i];
			}

			totalSum += parseInt(number[i]);
		}
		return totalSum;
	}

	return parseInt(number);
}

module.exports = add;

