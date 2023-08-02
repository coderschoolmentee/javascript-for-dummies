const { 
  sum, 
  flattenArrayObjectMethod1, 
  flattenArrayObjectMethod2, 
  flattenArrayObjectMethod3,
  mapping,
  findMin,
  findMax,
  findUniqueValues
} = require('./reducing');

describe('sum', () => {
  const arr = [1, 2, 3];
  it('should sum an array of numbers', () => {
    expect(sum(arr)).toEqual(6);
  });

  it('should sum an array of numbers starting with a value', () => {
    expect(sum(arr, 10)).toEqual(16);
  });
});

describe('flatten array of objects', () => {
  const arr = [
    { key: 'a', value: 1 },
    { key: 'b', value: 2 },
    { key: 'c', value: 3 },
  ];
  const expected = {
    a: 1,
    b: 2,
    c: 3,
  };

  it('flattenArrayObjectMethod1 should flatten an array of objects', () => {
    expect(flattenArrayObjectMethod1(arr)).toEqual(expected);
  });

  it('flattenArrayObjectMethod2 should flatten an array of objects', () => {
    expect(flattenArrayObjectMethod2(arr)).toEqual(expected);
  });

  it('flattenArrayObjectMethod3 should flatten an array of objects', () => {
    expect(flattenArrayObjectMethod3(arr)).toEqual(expected);
  });
});


describe('map using reduce', () => {
  const arr = [1, 2, 3];
  const fn = (x) => x * 2;

  it('should map an array', () => {
    expect(mapping(arr, fn)).toEqual([2, 4, 6]);
  });
});

describe('find min and max using reduce', () => {
  const arr = [1, 2, 3, 4, 5];

  it('should find the min', () => {
    expect(findMin(arr)).toEqual(1);
  });

  it('should find the max', () => {
    expect(findMax(arr)).toEqual(5);
  });
});

describe('find unique values using reduce', () => {
  const arr = [1, 1, 2, 3, 3, 4, 5];

  it('should find the unique values', () => {
    expect(findUniqueValues(arr)).toEqual([1, 2, 3, 4, 5]);
  });
});