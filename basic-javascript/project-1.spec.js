const helpers = require('./project-1');

// start testing!
describe('jest', () => {
    test('Jest runs', () => {

    });
});

describe('helpers', () => {
    beforeEach(() => {
        console.log('running');
    })

    describe('multiplyByTen', () => {
        test('multiples by 10', () => {
            expect(helpers.multiplyByTen(5)).toBe(50)
            expect(helpers.multiplyByTen(5.5)).toBe(55)
        });
    
        test('throws an error for non-numbers', () => {
            expect(() => helpers.multiplyByTen('hello')).toThrow();
        });
    })

    describe('subtractFive', () => {
        test('subtract by 5', () => {
            expect(helpers.subtractFive(10)).toBe(5)
        });
    })
    
    describe('areSameLength', () => {
        test('check if same length', () => {
            // expect(helpers.areSameLength('abc', 'bgv').toHaveLength(3));
            expect(helpers.areSameLength('hello', 'words')).toBeTruthy();
        });
    })

    describe('areEqual', () => {
        test('check if equal', () => {
            // expect(helpers.areSameLength('abc', 'bgv').toHaveLength(3));
            const x = 5;
            const y = 5;
            expect(helpers.areEqual(x, y)).toBeTruthy();
        });
    })

    describe('lessThanNinety', () => {
        test('check if < 90', () => {
            // expect(helpers.areSameLength('abc', 'bgv').toHaveLength(3));
            expect(helpers.lessThanNinety(60)).toBeTruthy();
        });
    })

    describe('greaterThanFifty', () => {
        test('check if > 50', () => {
            // expect(helpers.areSameLength('abc', 'bgv').toHaveLength(3));
            expect(helpers.greaterThanFifty(60)).toBeTruthy();
        });
    })

    describe('add', () => {
        test('add two number', () => {
            // expect(helpers.areSameLength('abc', 'bgv').toHaveLength(3));
            expect(helpers.add(3, 3)).toBe(6);
        });
    })

    describe('subtract', () => {
        test('subtract two number', () => {
            // expect(helpers.areSameLength('abc', 'bgv').toHaveLength(3));
            expect(helpers.subtract(3, 3)).toBe(0);
        });
    })

    describe('divide', () => {
        test('divide two number', () => {
            // expect(helpers.areSameLength('abc', 'bgv').toHaveLength(3));
            expect(helpers.divide(4, 2)).toBe(2);
        });
    })

    describe('multiply', () => {
        test('multiply two number', () => {
            // expect(helpers.areSameLength('abc', 'bgv').toHaveLength(3));
            expect(helpers.multiply(4, 2)).toBe(8);
        });
    })
})