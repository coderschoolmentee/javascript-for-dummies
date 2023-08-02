/**
It is often necessary to generate a new array based on the values of an existing array
*/

function getLetterCount(arr) {
  return arr.map((item) => item.length);
}

function testThis(arr) {
  return arr.map(
    function (item) {
      return this.test + item.length;
    },
    {
      test: 4,
    }
  );
}

module.exports = {
  getLetterCount,
  testThis,
};
