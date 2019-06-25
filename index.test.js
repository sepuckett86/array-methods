const { map, filter, findIndex, reduce, every, forEach } = require('./index.js');

const arr = [1, 2, 3, 4, 5, undefined];

describe('array methods', () => {
  it('can map (n + 1)', () => {
    const callback = number => {
      return number + 1;
    };
    const updatedArray = map(arr, callback);
    expect(updatedArray).toEqual([
      2, 3, 4, 5, 6, undefined
    ]);
  });

  it('can map (n - 1)', () => {
    const callback = number => number - 1;
    const updatedArray = map(arr, callback);
    expect(updatedArray).toEqual([
      0, 1, 2, 3, 4, undefined
    ]);
  });

  it('map returns an array of identical length', () => {
    const callback = number => number - 1;
    const updatedArray = map(arr, callback);
    expect(updatedArray).toHaveLength(arr.length);
  });

  it('can filter', () => {
    const callback = number => number % 2 === 0;
    const updatedArray = filter(arr, callback);
    expect(updatedArray).toEqual([
      2, 4
    ]);
  });

  it('filter returns an array', () => {
    const callback = number => number % 2 === 0;
    const updatedArray = filter(arr, callback);
    expect(updatedArray).toEqual(expect.any(Array));
  });

  it('filter returns an empty array if nothing passes condition', () => {
    const callback = number => number % 7 === 0;
    const updatedArray = filter(arr, callback);
    expect(updatedArray).toEqual([]);
  });

  it('can findIndex', () => {
    const callback = number => number > 3;
    const index = findIndex(arr, callback);
    expect(index).toEqual(3);
  });

  it('can findIndex of -1', () => {
    const callback = number => number > 100;
    const index = findIndex(arr, callback);
    expect(index).toEqual(-1);
  });

  it('can reduce', () => {
    const callback = (accumulator, value) => accumulator + value;
    const actualSum = reduce(arr, callback);
    expect(actualSum).toEqual(15);
  });

  it('can reduce with initial value', () => {
    const callback = (accumulator, value) => accumulator + value;
    const initial = 10;
    const actualSum = reduce(arr, callback, initial);
    expect(actualSum).toEqual(25);
  });

  it('can return true with every', () => {
    const callback = number => number > 0;
    const boolean = every(arr, callback);
    expect(boolean).toEqual(true);
  });

  it('can return false with every', () => {
    const callback = number => number < 0;
    const boolean = every(arr, callback);
    expect(boolean).toEqual(false);
  });

  it('can perform forEach', () => {
    const mockCallback = jest.fn((item) => item + 1);
    forEach(arr, mockCallback);

    expect(mockCallback).toHaveBeenCalledTimes(5);
    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(5);

    // The first argument of the first call to the function was 1
    expect(mockCallback.mock.calls[0][0]).toBe(1);

    // The first argument of the second call to the function was 2
    expect(mockCallback.mock.calls[1][0]).toBe(2);

    // The return value of the first call to the function was 2
    expect(mockCallback.mock.results[0].value).toBe(2);

    // The return value of the first call to the function was 2
    expect(mockCallback.mock.results[1].value).toBe(3);

    expect(mockCallback).toHaveBeenLastCalledWith(5);
  });

  it('index passed in callback is handled', () => {
    const callback = (number, index) => {
      if(index) expect(index).toEqual(expect.any(Number));
      return number + 1;
    };
    map(arr, callback);
  });
});

