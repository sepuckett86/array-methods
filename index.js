// map 
// takes an array and a thing to do to that array 
// returns a new updated array 
function map(arr, callback) {
  let updatedArray = [];
  for(let i = 0; i < arr.length; i++) {
    updatedArray[i] = callback(arr[i]);
  }
  return updatedArray;
}

// returns an array of items that return true in callback
function filter(arr, callback) {
  let updatedArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) updatedArray.push(arr[i]);
  }
  return updatedArray;
}

function findIndex(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) return i;
  }
  return -1;
}

function reduce(arr, callback, initialValue = 0) {
  let accumulator = initialValue;
  for(let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
}

function every(arr, callback) {
  // fill in
}

function forEach(arr, callback) {
  // fill in
}

module.exports = { 
  map,
  filter,
  findIndex,
  reduce,
  every,
  forEach
}