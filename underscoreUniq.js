// _.uniq(array, [isSorted], [iteratee]) Alias: unique 
// Produces a duplicate-free version of the array, using === to test object equality. In 
// particular only the first occurence of each value is kept. If you know in advance that the 
// array is sorted, passing true for isSorted will run a much faster algorithm. If you want to 
// compute unique items based on a transformation, pass an iteratee function.

// _.uniq([1, 2, 1, 4, 1, 3]);
// => [1, 2, 4, 3]

var myUniq = function(array) {
	var resultsArr = [];
	var myObj = {};
	for(var i = 0; i < array.length; i++) {
		if(myObj[array[i]] === undefined) {
			myObj[array[i]] = 1;
			resultsArr.push(array[i]);
		}
	}
	return resultsArr;
}
