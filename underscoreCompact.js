// _.compact(array) 
// Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, 
// "", undefined and NaN are all falsy.

// _.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

var myCompact = function(array) {
	var newArr = [];
	
	for(var i = 0; i < array.length; i++) {
		if(array[i] != false) {
			newArr.push(array[i]);
		}
	}
	return newArr;
}
