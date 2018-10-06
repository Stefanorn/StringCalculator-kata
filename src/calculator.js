function add(number){

	var pattern = /[,\n]/;
	if(number == ""){
		return 0;
	}
	else if( pattern.test(number) ){
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
