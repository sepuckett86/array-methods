const { map, filter, findIndex, reduce, every, forEach } = require('./index.js');

const arr = [1, 2, 3, 4, 5];

describe('index functions', () => {
  it('can map (n + 1)', () => {
    const myCallback = number => number + 1;
    const updatedArray = map(arr, myCallback);
    expect(updatedArray).toEqual([
      2, 3, 4, 5, 6
    ]);
  });
  it('can map (n - 1)', () => {
    const myCallback = number => number - 1;
    const updatedArray = map(arr, myCallback);
    expect(updatedArray).toEqual([
      0, 1, 2, 3, 4
    ]);
  });
  it('can filter', () => {
    const myCallback = number => number % 2;
    const updatedArray = filter(arr, myCallback);
    expect(updatedArray).toEqual([
      2, 4
    ]);
  });
});

