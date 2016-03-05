// _.intersection(*arrays) 
// Computes the list of values that are the intersection of all the arrays. Each value in the 
// result is present in each of the arrays.

// _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
// => [1, 2]

var myIntersection = function(array) {
	var myObj = {};
	var myArr = [];
	for(var i = 0; i < arguments.length; i++) {
		for(var j = 0; j < arguments[i].length; j++) {
			if(myObj[arguments[i][j]] === undefined) {
				myObj[arguments[i][j]] = 1;
			} else {
				myObj[arguments[i][j]] += 1;
			}
		}
	}
	for(var num in myObj){
		if(myObj[num] > arguments.length) {
			myArr.push(parseInt(num));
		}
	}
	return myArr;
}
