const funcs = require('./project-1');

// write your tests here
describe('default', () => {
    it('run the tests', () => {});
  });


  describe('multiplyByTen', () => {
      it('should multiply by 10', () => {        
        //arrange
        //const multiply = funcs.multiplyByTen;

        // act
        //const fourty = multiply(4);

        //assert
        //expect(multiply).toBe(num);
        // expect(func).toBeCalledWith(expect.any(Number);
        //expect(fourty).toBe(40);
        expect(funcs.multiplyByTen(4)).toBe(40)
      })
  })

  describe('subtractFive', () => {
      it('should subtract five from sum', () => {
          expect(funcs.subtractFive(15)).toBe(10);
      })
  })

  describe('areSameLength', () => {
      it('should check if strings are same length', () => {
        expect(funcs.areSameLength('joe', 'bob')).toEqual(true);
      })
  })

  describe('areEqual', () => {
      it('should check if x equals y', () => {
        // const x = '5';
        // const y = '5';

        // const areEqual = funcs.areEqual(x,y);

        // expect(areEqual).toEqual(true);
        //expect(funcs).toBeCalledWith(expect.any(Number))
        expect(funcs.areEqual(4,4)).toEqual(true);
      })
  })


describe('lessThanNinety', () => {
   it('should check if less than ninety', () => {
   expect(funcs.lessThanNinety(80)).toEqual(true);
})
})

describe('greaterThanFifty', () => {
    it('should check if greater than fifty', () => {
    expect(funcs.greaterThanFifty(60)).toEqual(true);
    })
 })

 describe('add', () => {
    it('should check x + y', () => {
        expect(funcs.add(5, 6)).toEqual(11);
    })
 })
