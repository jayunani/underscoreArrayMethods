// _.initial(array, [n]) 
// Returns everything but the last entry of the array. Especially useful on the arguments 
// object. Pass n to exclude the last n elements from the result.

// _.initial([5, 4, 3, 2, 1]);
// => [5, 4, 3, 2]

var myInitial = function(array, n) {
	
	var results = [];
	var sub = 1;
	
	if (typeof n === "number") {
		sub = n;
	}
	for(var i = 0; i < array.length - sub; i++) {
		results.push(array[i]);
	}
	return results;

}
