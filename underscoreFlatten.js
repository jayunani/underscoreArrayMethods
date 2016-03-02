// flatten_.flatten(array, [shallow]) 
// Flattens a nested array (the nesting can be to any depth). If you pass shallow, the array 
// will only be flattened a single level.

// _.flatten([1, [2], [3, [ [4] ] ] ]);
// => [1, 2, 3, 4];

// _.flatten([1, [2], [3, [[4]]]], true);
// => [1, 2, 3, [[4]]];

var myFlatten = function(myArray) {
	var finalArr = [];
	
	var flatten = function(myArray) {
		for(var i = 0; i < myArray.length; i++) {
			if(Array.isArray(myArray[i])) {
				flatten(myArray[i]);
			} else {
				finalArr.push(myArray[i]);
			}
		}
	}
	myFlatten(myArray);
	return finalArr;
}
