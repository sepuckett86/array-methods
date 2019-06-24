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

function filter(arr, callback) {
  // fill in
}

function findIndex(arr, callback) {
  // fill in
}

function reduce(arr, callback, [initialValue]) {
  // fill in
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