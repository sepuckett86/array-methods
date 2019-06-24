const { map, filter, findIndex, reduce, every, forEach } = require('./index.js');

const arr = [1, 2, 3, 4, 5];

describe('index functions', () => {
  it('can map', () => {
    const myCallback = (number) => number + 1;
    const updatedArray = map(arr, myCallback);
    expect(updatedArray).toEqual([
      2, 3, 4, 5, 6
    ]);
  });
});

