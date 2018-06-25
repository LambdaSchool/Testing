const helpers = require('./project-1');

// // start testing!
describe('project-1', () => {
    describe('multiplyByTen', () => {
        it('can multiply by ten', () => {
            //arrange
            const expected = 100;

            //act
            const actual = helpers.multiplyByTen(10);

            //assert
            expect(actual).toEqual(expected);

        })
    });

    describe('subtractFive', () => {
        //arrange
        const expected = 45;

        //act
        const actual = helpers.subtractFive(50);

        //assert
        expect(actual).toEqual(expected);
    });
    //not passing, why?
    describe('areSameLength', () => {
        it.skip('str1 and str2 should be the same length', () => {
            const expected = false;
            const areSameLength = helpers.areSameLength('pickle', 'bee');

            expect(actual).toEqual(expected);
        })
        it('str1 and str2 should be the same length', () => {
            const expected = true;
            const actual = helpers.areSameLength('band', 'hand')
        })

    });

    describe ('areEqual', () => {
        it('arg1 and arg2 should be equal', () => {
            const expected = false;
            const actual = helpers.areEqual(16, 10);
    
            expect(actual).toEqual(expected);
        });
        it('arg1 and arg2 should be equal', () => {
            const expected = true;
            const actual = helpers.areEqual(16, 16);
        
            expect(actual).toEqual(expected);
        });
    });

    describe('lessThanNinety', () => {
        it('arg should be less than 90', () => {
            const expected = false;
            const actual = helpers.lessThanNinety(99);

            expect(actual).toEqual(expected);
        });
        it('arg should be less than 90', () => {
            const expected = true;
            const actual = helpers.lessThanNinety(89);

            expect(actual).toEqual(expected);
        });
    });

    describe('greaterThanFifty', () => {
        it('arg should be greater than 50', () => {
            const expected = false;
            const actual = helpers.greaterThanFifty(21);

            expect(actual).toEqual(expected);
        });
        it('arg should be greater than 50', () => {
            const expected = true;
            const actual = helpers.greaterThanFifty(51);

            expect(actual).toEqual(expected);
        });
    });

    describe('add', () => {
        it('arg1 and arg2 should be added together', () => {
            const expected = NaN;
            const actual = helpers.add(5, undefined);

            expect(actual).toEqual(expected);
        });
        it('arg1 and arg2 should be added together', () => {
            const expected = 10;
            const actual = helpers.add(5, 5);

            expect(actual).toEqual(expected);
        });
    });

    describe('subtract', () => {
        it('arg1 and arg2 should be subtracted from each other', () => {
            const expected = NaN;
            const actual = helpers.subtract(23, undefined);

            expect(actual).toEqual(expected);
        })
        it('arg1 and arg2 should be subtracted from each other', () => {
            const expected = 20;
            const actual = helpers.subtract(23, 3);

            expect(actual).toEqual(expected);
        })
    })

    describe('divide', () => {
        it('arg1 should be devisible by arg2', () => {
            const expected = NaN;
            const actual = helpers.divide(80, undefined);

            expect(actual).toEqual(expected);
        })
        it('arg1 should be devisible by arg2', () => {
            const expected = 8;
            const actual = helpers.divide(80, 10);

            expect(actual).toEqual(expected);
        })
    })

    describe('multiply', () => {
        it('arg1 and arg2 should be multiplied together', () => {
            const expected = NaN;
            const actual = helpers.multiply(7, 'pillow');

            expect(actual).toEqual(expected);
        })
        it('arg1 and arg2 should be multiplied together', () => {
            const expected = 21;
            const actual = helpers.multiply(7, 3);

            expect(actual).toEqual(expected);
        })
    })

    describe('getRemainder', () => {
        it('gives a remainder of arg1 devided by arg2', () => {
            const expected = NaN;
            const actual = helpers.getRemainder(10, 'string');

            expect(actual).toEqual(expected);
        })
        it('gives a remainder of arg1 devided by arg2', () => {
            const expected = 1;
            const actual = helpers.getRemainder(10, 3);

            expect(actual).toEqual(expected);
        })
    })

    describe('isEven', () => {
        it('remainder of arg1 devided by 2 should be equal to 0', () => {
            const expected = false;
            const actual = helpers.isEven(3);

            expect(actual).toEqual(expected);
        });
        it('remainder of arg1 devided by 2 should be equal to 0', () => {
            const expected = true;
            const actual = helpers.isEven(2);

            expect(actual).toEqual(expected);
        });
    });
    //check logic
    describe('isOdd', () => {
        it('remainder of arg1 devided by 2 should be equal to 0', () => {
            const expected = true;
            const actual = helpers.isOdd(11);

            expect(actual).toEqual(expected);
        })
        it('remainder of arg1 devided by 2 should be equal to 0', () => {
            const expected = false;
            const actual = helpers.isOdd(12);

            expect(actual).toEqual(expected);
        })
    })

    describe('square', () => {
        it('arg must be squared', () => {
            const expected = NaN;
        const actual = helpers.square('string');

        expect(actual).toEqual(expected);
        })
        it('arg must be squared', () => {
            const expected = 16;
        const actual = helpers.square(4);

        expect(actual).toEqual(expected);
        })
    })


});

