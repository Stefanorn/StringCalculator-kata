function add(number){

	var splitter = ","
	if(number == ""){
		return 0;
	}
	else if( number.includes(splitter) ){
		number = number.split(splitter);
		return parseInt(number[0]) + parseInt(number[1]);
	}

	return parseInt(number);
}

module.exports = add;
