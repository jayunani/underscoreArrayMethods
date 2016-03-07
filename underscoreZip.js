//  _.zip(*arrays) 
// Merges together the values of each of the arrays with the values at the corresponding 
// position. Useful when you have separate data sources that are coordinated through matching 
// array indexes. If you're working with a matrix of nested arrays, _.zip.apply can transpose 
// the matrix in a similar fashion.

// _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
// => [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]

function myZip(arr){
  var outputArray = [];
  var outputArrayLength = arr.reduce(function(a,b){
    return Math.max(a,b.length);
  },0);
  var counter = 0;
  while(counter<outputArrayLength){
    outputArray.push([]);
    for(var i=0; i<arr.length; i++){
      outputArray[counter].push(arr[i][counter]);
    }
    counter++;
  }
  
  return outputArray;
}

function myZip(arrays){
  var myArr = [];
  var outputArray = [];
  var arrayLengths = 0;
  var counter = 0;
  for(var i = 0; i < arguments.length; i++) {
    myArr.push(arguments[i]);
  }
  for(var j = 0; j < myArr.length; j++) {
    if(myArr[j].length > arrayLengths) {
      arrayLengths = myArr[j].length;
    }
  }
  while(counter < arrayLengths){
    outputArray.push([]);
    for(var k = 0; k < myArr.length; k++){
      outputArray[counter].push(myArr[k][counter]);
    }
    counter++;
  }
  
  return outputArray;
}
