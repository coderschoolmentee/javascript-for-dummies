/**
  The reduce() method applies a function against an accumulator and each value of the array 
  (from left-to-right) to reduce it to a single value.
*/

function sum(arr, initValue = 0) {
  return arr.reduce((acc, curr) => acc + curr, initValue);
}

function flattenArrayObjectMethod1(arr) {
  return arr.reduce((acc, curr) => { 
    acc[curr.key] = curr.value; 
    return acc;
  }, {});
}

function flattenArrayObjectMethod2(arr) {
  return arr.reduce((obj, current) => Object.assign(obj, {
    [current.key]: current.value
  }), {});
}

function flattenArrayObjectMethod3(arr) {
  return arr.reduce((obj, current) => ({...obj, [current.key]: current.value}), {});
}

function mapping(list, fn) {
  return list.reduce( (newList, item) => newList.concat(fn(item)), []);
}

function findMin(arr) {
  return arr.reduce((min, curr) => curr < min ? curr : min, arr[0]);
}

function findMax(arr) {
  return arr.reduce((max, curr) => curr > max ? curr : max, arr[0]);
}

function findUniqueValues(arr) {
  return arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

module.exports = {
  sum,
  flattenArrayObjectMethod1,
  flattenArrayObjectMethod2,
  flattenArrayObjectMethod3,
  mapping,
  findMin,
  findMax,
  findUniqueValues
};