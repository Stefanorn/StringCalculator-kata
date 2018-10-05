function add(number){

	var splitter = ",";
	if(number == ""){
		return 0;
	}
	else if( number.includes(splitter) ){
		var totalSum = 0;
		number = number.split(splitter);
		for( var i = 0; i < number.length; i++){
			totalSum += parseInt(number[i]);
		}
		return totalSum;
	}

	return parseInt(number);
}

module.exports = add;
