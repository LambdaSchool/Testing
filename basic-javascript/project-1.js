/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  if (!num) {
    return 0;
  }
  if (typeof num !== "number") {
    throw new Error('value must be a number')
  }
  return num * 10;
};

const subtractFive = num => {
  if (typeof num !== 'number') {
    throw new Error('value must be a number')
  }
  return num - 5;
};

const areSameLength = (str1, str2) => {
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  return x === y;
};

const lessThanNinety = num => {
  if (num < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = num => {
  if (num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  if ( (typeof x && typeof y)  !== 'number' ) {
    throw new Error('either x or y should be number')
  }

  return x + y;
};

const subtract = (x, y) => {
  if ( (typeof x && typeof y)  !== 'number' ) {
    throw new Error('either x or y should be number')
  }

  return x - y;
};

const divide = (x, y) => {
  if ( (typeof x && typeof y)  !== 'number' ) {
    throw new Error('either x or y should be number')
  }
  return x / y;
};

const multiply = (x, y) => {
  if ( (typeof x && typeof y)  !== 'number' ) {
    throw new Error('either x or y should be number')
  }
  return x * y;
};

const getRemainder = (x, y) => {
  if ( (typeof x && typeof y)  !== 'number' ) {
    throw new Error('either x or y should be number')
  }
  return x % y;
};

const isEven = num => {
  if (num % 2 === 0) {
    return true;
  }
  else if (typeof num !== 'number') {
    throw new Error('it should be the number')
  }
  return false;
};

const isOdd = num => {
  if (num % 2 === 0) {
    return false;
  }
  else if (typeof num !== 'number') {
    throw new Error('it should be the number')
  }
  return true;
};

const square = num => {
  if (typeof num !== 'number') {
    throw new Error('it should be the number')
  }
  return num * num;
};

const cube = num => {
  if (typeof num !== 'number') {
    throw new Error('it should be the number')
  }
  return num * num * num;
};

const raiseToPower = (num, exponent) => {
  if ( (typeof num !== 'number') || (typeof exponent !== 'number') ) {
    throw new Error('either x or y should be number')
  }
  return num ** exponent;
};

const roundNumber = num => {
  return Math.round(num);
};

const roundUp = num => {
  return Math.ceil(num);
};

const addExclamationPoint = str => {
  return (str += '!');
};

const combineNames = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

const getGreeting = name => {
  return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
  return length * width;
};

const getTriangleArea = (base, height) => {
  return 0.5 * base * height;
};

const getCircleArea = radius => {
  return Math.PI * radius * radius;
};

const getRectangularPrismVolume = (length, width, height) => {
  return width * height * length;
};

module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
};
