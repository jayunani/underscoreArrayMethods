// _.without(array, *values) 
// Returns a copy of the array with all instances of the values removed.

// _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
// => [2, 3, 4]

var myWithout = function(array, notThese) {
	
	var myObj = {};
	var myArr = [];

	for(var i = 1; i < arguments.length; i++) {
		myObj[arguments[i]] = arguments[i];
	}

	for(var i=0; i<array.length; i++){
		if(array[i] !== myObj[array[i]]) {
			myArr.push(array[i])
		}  
	}
	return myArr;
}

// var myWithout = function(array, notThese) {
//         var blacklist = [];
//         var newArr = [];

//         for(var i = 1; i < arguments.length; i++) {
//           blacklist.push(arguments[i]);
//         }

//         for(var i = 0; i < array.length; i++) {
//           var isBlacklisted = blacklist.indexOf(array[i]) >= 0;

//           if (!isBlacklisted) {
//             newArr.push(array[i]);
//           }
//         }

//         return newArr;
//       }

//       var myNewArray = myWithout([1,1,2,3,4,4], 4,3);