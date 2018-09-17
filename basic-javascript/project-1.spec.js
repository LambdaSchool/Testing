const helpers = require('./project-1');

it('should multiply number by 10', () => {
  expect(helpers.multiplyByTen(5)).toBe(50);
});

it('(multby10) should return false if value is not a number', () => {
  expect(helpers.multiplyByTen(false)).toBe(false);
});

it('should remove 5 from number', () => {
  expect(helpers.subtractFive(7)).toBe(2);
});

it('(sub5) should return false if value is not a number', () => {
  expect(helpers.subtractFive(null)).toBe(false);
});

it('should return true if two strings are same length', () => {
  expect(helpers.areSameLength('test', 'yes!')).toBe(true);
});

it('should return false if two strings are different length', () => {
  expect(helpers.areSameLength('a really long string', 'shortStr')).toBe(false);
});

it('should return false if two numbers not equal', () => {
  expect(helpers.areEqual(8-2, 8-5)).toBe(false);
});

//example of pass, but shouldn't
it('(areEqual) should return false if one value is not a number', () => {
  expect(helpers.areEqual(true, 1)).toBe(false);
});

it('should return true if less than 90', () => {
  expect(helpers.lessThanNinety(45)).toBe(true);
});

it('should return false if more than 90', () => {
  expect(helpers.lessThanNinety(180)).toBe(false);
});

it('should return true if greater than 50', () => {
  expect(helpers.greaterThanFifty(7000)).toBe(true);
});

it('should return false if less than 50', () => {
  expect(helpers.greaterThanFifty(12)).toBe(false);
});

it('should add two numbers', () => {
  expect(helpers.add(9, -3)).toBe(6);
});

it('(add) should return false if a value is not a number and cannot be converted', () => {
  expect(helpers.add('test', 5)).toBe(false);
});

it('should subtract second number from first', () => {
  expect(helpers.subtract(100, 25)).toBe(75);
});

it('should return other number if one value is not provided', () => {
  expect(helpers.subtract(null, 55)).toBe(55);
});

it('should return first value divided by second value', () => {
  expect(helpers.divide(1250, 50)).toBe(25);
});

it('should round down if not a whole number', () => {
  expect(helpers.divide(1250, 27)).toBe(46);
});

it('should multiply two numbers together', () => {
  expect(helpers.multiply(8, 93)).toBe(744);
});

it('(mult) should return false if one value is not provided', () => {
  expect(helpers.multiply(undefined, 5)).toBe(false);
});

it('should return the remainder if division is not even', () => {
  expect(helpers.getRemainer(9, 3)).toBe(1);
});

it('(remain) should return false if either value is not a number', () => {
  expect(helpers.getRemainer(21, 'test')).toBe(false);
});

it('should return false if value is not even', () => {
  expect(helpers.isEven(9)).toBe(false);
});

it('(even?) should return false if value is not a number', () => {
  expect(helpers.isEven('test')).toBe(false);
});

it('(odd?) should return true if value is odd', () => {
  expect(helpers.isOdd(9)).toBe(true);
});

it('should square a value passed', () => {
  expect(helpers.square(5)).toBe(25);
});

it('(square) should return false if value is not a number', () => {
  expect(helpers.square('test')).toBe(false);
});

it('should cube a value passed', () => {
  expect(helpers.cube(9)).toBe(729);
});

it('(cube) should return false if value is not a number', () => {
  expect(helpers.cube(undefined)).toBe(false);
});
