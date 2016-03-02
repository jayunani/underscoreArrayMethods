// rest_.rest(array, [index]) Alias: tail, drop 
// Returns the rest of the elements in an array. Pass an index to return the values of the 
// array from that index onward.

// _.rest([5, 4, 3, 2, 1]);
// => [4, 3, 2, 1]

var myRest = function(array, index) {
	var newArray = [];
	for(var i = index; i < array.length; i++) {
		newArray.push(array[i])
	}
	return newArray;
}