const assert = require('chai').expect;
const objectFunctions = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('`keys`', () => {
    it('should be a function', () => {
      const { keys } = objectFunctions;
      assert(keys).to.be.a('function');
    });
  });
  describe('`values`', () => {
    it('should be a function', () => {
      const { values } = objectFunctions;
      assert(values).to.be.a('function');
    });
  });
  describe('`mapObject`', () => {
    it('should be a function', () => {
      const { mapObject } = objectFunctions;
      assert(mapObject).to.be.a('function');
    });
  });
  describe('`pairs`', () => {
    it('should be a function', () => {
      const { pairs } = objectFunctions;
      assert(pairs).to.be.a('function');
    });
  });
  describe('`invert`', () => {
    it('should be a function', () => {
      const { invert } = objectFunctions;
      assert(invert).to.be.a('function');
    });
  });
  describe('`defaults`', () => {
    it('should be a function', () => {
      const { defaults } = objectFunctions;
      assert(defaults).to.be.a('function');
    });
  });
});
