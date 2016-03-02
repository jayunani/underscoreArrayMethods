// _.first(array, [n]) Alias: head, take 
// Returns the first element of an array. Passing n will return the first n elements of 
// the array.

// _.first([5, 4, 3, 2, 1]);
// => 5

var myFirst = function(array, n) {
	var results = [];
	if(typeof n === "number"){
		for (var i = 0; i < n; i++) {
			results.push(array[i]);
		}
		return results;
	} else {
		return array[0];
	}
}