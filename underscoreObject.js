// _.object(list, [values]) 
// Converts arrays into objects. Pass either a single list of [key, value] pairs, or a list of 
// keys, and a list of values. If duplicate keys exist, the last value wins.

// _.object(['moe', 'larry', 'curly'], [30, 40, 50]);
// => {moe: 30, larry: 40, curly: 50}

// _.object([['moe', 30], ['larry', 40], ['curly', 50]]);
// => {moe: 30, larry: 40, curly: 50}

var myObject = function(list, values) {
	var newObj = {};
	if(arguments.length > 1) {
		for(var i = 0, j = 0; i < list.length, j < values.length; i++, j++) {
			newObj[list[i]] = values[i];
		} 
	} else {
		for(var i = 0; i < list.length; i++){
			newObj[list[i][0]] = list[i][1]
		}
	}
	return newObj;
}
