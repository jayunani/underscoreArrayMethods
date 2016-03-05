// _.union(*arrays) 
// Computes the union of the passed-in arrays: the list of unique items, in order, that 
//are 
// present in one or more of the arrays.

// _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
// => [1, 2, 3, 101, 10]

var myUnion = function(array) {
	var myObj = {};
	var myArr = [];
	var checkArr = [];
	for(var i = 0; i < arguments.length; i++) {
		for(var j = 0; j < arguments[i].length; j++) {
			if(myObj[arguments[i][j]] === undefined) {
				myObj[arguments[i][j]] = 1;
				checkArr.push(arguments[i][j]);
			} else {
				myObj[arguments[i][j]] += 1;
			}
		}
	}
	return checkArr;
}
