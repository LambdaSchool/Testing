const helpers = require('./project-1');

// Arrange, Act, Assert

// Numbers, Strings, Array, Boolean, Object, NaN

describe('Project 1', () => {
  describe('multiplyByTen', () => {
    it('Returns number multiplied by 10 when given a numeric value', () => {
      const expected = 30;
      const actual = helpers.multiplyByTen(3);
      expect(actual).toBe(expected);
    });

    it('Returns number multiplied by 10 when given a number as a string', () => {
      const expected = 50;
      const actual = helpers.multiplyByTen('5');
      expect(actual).toBe(expected);
    });

    it('Returns false when called without an argument', () => {
      const expected = false;
      const actual = helpers.multiplyByTen();
      expect(actual).toBe(expected);
    });

    it('Returns 0 when given null', () => {
      const expected = 0;
      const actual = helpers.multiplyByTen(null);
      expect(actual).toBe(expected);
    });

    it('Returns 10 when given true', () => {
      const expected = 10;
      const actual = helpers.multiplyByTen(true);
      expect(actual).toBe(expected);
    });

    it('Returns 0 when given false', () => {
      const expected = 0;
      const actual = helpers.multiplyByTen(false);
      expect(actual).toBe(expected);
    });

    describe('Returns false when given a non-numeric value:', () => {
      it('A string', () => {
        const expected = false;
        const actual = helpers.multiplyByTen('Hello');
        expect(actual).toBe(expected);
      });

      it('An array of values', () => {
        const expected = false;
        const actual = helpers.multiplyByTen([3, 2]);
        expect(actual).toBe(expected);
      });

      it('undefined', () => {
        const expected = false;
        const actual = helpers.multiplyByTen(undefined);
        expect(actual).toBe(expected);
      });
    });
  });

  describe('subtractFive', () => {
    it('Returns number minus 5 when given a numeric value', () => {
      const expected = 5;
      const actual = helpers.subtractFive(10);
      expect(actual).toBe(expected);
    });

    it('Returns number minus 5 when given a number as a string', () => {
      const expected = 10;
      const actual = helpers.subtractFive('15');
      expect(actual).toBe(expected);
    });

    it('Returns NaN when given a non-numeric string', () => {
      const expected = NaN;
      const actual = helpers.subtractFive('Hello');
      expect(actual).toBe(expected);
    });

    it('Returns NaN when called without an argument', () => {
      const expected = NaN;
      const actual = helpers.subtractFive();
      expect(actual).toBe(expected);
    });

    it('Returns -4 when given true', () => {
      const expected = -4;
      const actual = helpers.subtractFive(true);
      expect(actual).toBe(expected);
    });

    it('Returns -5 when given false', () => {
      const expected = -5;
      const actual = helpers.subtractFive(false);
      expect(actual).toBe(expected);
    });

    it('Returns NaN when given an array of values', () => {
      const expected = NaN;
      const actual = helpers.subtractFive([10, 15, 20]);
      expect(actual).toBe(expected);
    });

    it('Returns NaN when given undefined', () => {
      const expected = NaN;
      const actual = helpers.subtractFive(undefined);
      expect(actual).toBe(expected);
    });

    it('Returns -5 when given null', () => {
      const expected = -5;
      const actual = helpers.subtractFive(null);
      expect(actual).toBe(expected);
    });
  });

  // describe('areSameLength', () => {});

  // describe('areEqual', () => {});

  // describe('lessThanNinety', () => {});

  // describe('greaterThanFifty', () => {});

  describe('add', () => {
    it('Returns sum when given two numbers', () => {
      const expected = 33;
      const actual = helpers.add(23, 10);
      expect(actual).toBe(expected);
    });

    it('Returns concatenated string when given a string as either or both arguments', () => {
      const expected = '2310';
      const actual = helpers.add('23', '10');
      expect(actual).toBe(expected);
    });

    it('Returns NaN when called without arguments', () => {
      const expected = NaN;
      const actual = helpers.add();
      expect(actual).toBe(expected);
    });

    it('Returns concatenation of argument and undefined when given one string', () => {
      const expected = '5undefined';
      const actual = helpers.add('5');
      expect(actual).toBe(expected);
    });

    it('Returns NaN when given one numerical value', () => {
      const expected = NaN;
      const actual = helpers.add(2);
      expect(actual).toBe(expected);
    });

    it('Returns 2 when given true as both arguments', () => {
      const expected = 2;
      const actual = helpers.add(true, true);
      expect(actual).toBe(expected);
    });

    it('Returns 0 when given false as both arguments', () => {
      const expected = 0;
      const actual = helpers.add(false, false);
      expect(actual).toBe(expected);
    });

    it('Returns 1 when given true and false', () => {
      const expected = 1;
      const actual = helpers.add(true, false);
      expect(actual).toBe(expected);
    });

    it('Returns NaN when given undefined', () => {
      const expected = NaN;
      const actual = helpers.add(undefined, undefined);
      expect(actual).toBe(expected);
    });

    it('Returns 0 when given null', () => {
      const expected = 0;
      const actual = helpers.add(null, null);
      expect(actual).toBe(expected);
    });
  });

  // describe('subtract', () => {});

  // describe('divide', () => {});

  // describe('multiply', () => {});

  // describe('getRemainder', () => {});

  // describe('isEven', () => {});

  // describe('isOdd', () => {});

  // describe('square', () => {});

  // describe('cube', () => {});

  // describe('raiseToPower', () => {});

  // describe('roundNumber', () => {});

  // describe('roundUp', () => {});

  // describe('addExclamationPoint', () => {});

  // describe('combineNames', () => {});

  // describe('getGreeting', () => {});

  // describe('getRectangleArea', () => {});

  // describe('getTriangleArea', () => {});

  // describe('getCircleArea', () => {});

  // describe('getRectangularPrismVolume', () => {});
});
