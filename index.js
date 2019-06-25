// map 
// takes an array and a thing to do to that array 
// returns a new updated array 
function map(arr, callback) {
  let updatedArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]) updatedArray[i] = callback(arr[i], i);
    else updatedArray[i] = undefined;
  }
  return updatedArray;
}

// returns an array of items that return true in callback
function filter(arr, callback) {
  let updatedArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      updatedArray[updatedArray.length] = arr[i];
    }
  }
  return updatedArray;
}

// Define an array
// Define a callback condition that will return a boolean
// Iterate over the array, 
// If array item is not undefined or a hole 
//    Call callback function with item as parameter
//    If callback is true, return index
// If callback is never true, return -1

function findIndex(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) return i;
  }
  return -1;
}


// Define an input, callback, and output example

// Input arr: [1, 2, 3, 4]
// Input callback: add everything
// Output arr: 10

// Reduce 
//  -set initial accumulator
//  -iterates through every item in the array
//      -performs callback
// 
// Callback
//  -takes result of last action (accumulator)
//  -performs callback on the accumulator
//  -returns updated accumulator

function reduce(arr, callback, initialValue) {
  let accumulator;
  let i = 0;
  if(initialValue === undefined) {
    accumulator = arr[0];
    i = 1;
  } else {
    accumulator = initialValue;
  }
  for(i; i < arr.length; i++) {
    if(arr[i]) accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
}

// returns a boolean if every array member satisfies the callback
function every(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]) if(!callback(arr[i])) return false;
  }
  return true;
}

function forEach(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]) callback(arr[i]);
  }
}

module.exports = { 
  map,
  filter,
  findIndex,
  reduce,
  every,
  forEach
};
