/**  
What are Array-like Objects?
JavaScript has "Array-like Objects", which are Object representations of Arrays with a length property.

Common examples of Array-like Objects are the arguments object in functions and HTMLCollection or NodeList objects returned from methods like 
document.getElementsByTagName or document.querySelectorAll.

However, one key difference between Arrays and Array-like Objects is that Array-like objects inherit from Object.prototype instead of Array.prototype. 
This means that Array-like Objects can't access common Array prototype methods like forEach(), push(), map(), filter(), and slice().

const realArray = ['a', 'b', 'c']; 
const arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};
*/ 



// Convert Array-like Objects to Arrays in ES6 using Array.from()
function convertToArrayMethod1(arrayLike) {
  return Array.from(arrayLike);
}

// Convert Array-like Objects to Arrays in ES6 using for...of
function convertToArrayMethod2(arrayLike) {
  const realArray = [];
  for (const value of arrayLike) {
    realArray.push(value);
  }
  return realArray;
}


// Convert Array-like Objects to Arrays in ES6 using spread operator
function convertToArrayMethod3(arrayLike) {
  const realArray = [...arrayLike];
  return realArray;
}

function convertToArrayMethod4(arrayLike) {
  const realArray = Array.prototype.slice.call(arrayLike);
  return realArray;
}

function convertToArrayMethod5(arrayLike) {
  const realArray = Array.prototype.slice.apply(arrayLike);
  return realArray;
}

function convertToArrayMethod6(arrayLike) {
  return Object.keys(arrayLike).map((key) => arrayLike[key]);
}

// use [].method.bind( arrayLikeObject ) to borrow array methods and glom them on to your object
function convertToArrayMethod7(arrayLike) {
  const realArray = [];
  [].forEach.bind(arrayLike)( (e) => {
    realArray.push(e);
  });
  return realArray;
}

module.exports = {
  convertToArrayMethod1,
  convertToArrayMethod2,
  convertToArrayMethod3,
  convertToArrayMethod4,
  convertToArrayMethod5,
  convertToArrayMethod6,
  convertToArrayMethod7
};