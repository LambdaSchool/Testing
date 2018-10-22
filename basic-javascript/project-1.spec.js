const helpers = require('./project-1');

// start testing!

describe('project-1.js', () => {
	describe('multiplyByTen()', () => {
		// const multiplyByTen = (num) => {
		// 	return num * 10;
		// };
		// expected multiplication
		it('should multiply provided num by ten', () => {
			const expected = 20;
			const actual = helpers.multiplyByTen(2);
			expect(actual).toEqual(expected);
		});

		// input null
		it('should throw an error when called with no value', () => {
			expect(() => {
				helpers.multiplyByTen();
			}).toThrowError();
		});

		// input string
		it('should throw error when called with a string', () => {
			expect(() => {
				helpers.multiplyByTen('five');
			}).toThrowError();
		});
	});

	describe('subtractFive()', () => {
		// const subtractFive = (num) => {
		// 	return num - 5;
		// };
		// expected subtraction
		it('should subtract five from provided number', () => {
			const expected = 6;
			const actual = helpers.subtractFive(11);
			expect(actual).toEqual(expected);
		});

		// input null
		it('should throw an error when called with no value', () => {
			expect(() => {
				helpers.subtractFive();
			}).toThrowError();
		});

		// input string
		it('should throw error when called with a string', () => {
			expect(() => {
				helpers.subtractFive('eleven');
			}).toThrowError();
		});
	});

	describe('areSameLength()', () => {
		// const areSameLength = (str1, str2) => {
		// 	return str1.length === str2.length;
		// };
		// return true
		it('should return true when provided two strings of equal length', () => {
			const lengthEqual = helpers.areSameLength('str1', 'str2');
			expect(lengthEqual).toEqual(true);
		});

		// return false
		it('should return false when provided two strings of unequal length', () => {
			const lengthUnequal = helpers.areSameLength('str1aaaaaaa', 'str2');
			expect(lengthUnequal).toEqual(false);
		});

		// input null
		it('should throw an error when called with no value', () => {
			expect(() => {
				helpers.areSameLength('str1');
			}).toThrowError();
		});

		// input not string
		it('should throw error when called with a non-string', () => {
			expect(() => {
				helpers.areSameLength(42, 'as');
			}).toThrowError();
		});
	});

	describe('areEqual()', () => {
		// const areEqual = (x, y) => {
		// 	return x === y;
		// };
		// are equal
		it('should return true if values are equal', () => {
			const actual = helpers.areEqual(4, 4);
			expect(actual).toEqual(true);
		});

		// not equal
		it('should return false if values are not equal', () => {
			const actual = helpers.areEqual(2, 4);
			expect(actual).toEqual(false);
		});

		// input null
		it('should throw an error if one or both values are null', () => {
			expect(() => {
				helpers.areEqual(3);
			}).toThrowError();
		});

		// input not number
		it('should throw an error if one or both values are not a number', () => {
			expect(() => {
				helpers.areEqual('3', '4');
			}).toThrowError();
		});
	});

	describe('lessThanNinety()', () => {
		// const lessThanNinety = (num) => {
		// 	if (num < 90) {
		// 		return true;
		// 	}
		// 	return false;
		// };
		// less than 90
		it('should return true if input is less than ninety', () => {
			const actual = helpers.lessThanNinety(42);
			expect(actual).toEqual(true);
		});

		// greater than or equal to 90
		it('should return false if input is greater than eighty-nine', () => {
			const actual = helpers.lessThanNinety(90);
			expect(actual).toEqual(false);
		});

		// input null
		it('should throw an error if input is null', () => {
			expect(() => {
				helpers.lessThanNinety();
			}).toThrowError();
		});

		// input not number
		it('should throw an error if input is not a number', () => {
			expect(() => {
				helpers.lessThanNinety('3');
			}).toThrowError();
		});
	});

	describe('greaterThanFifty()', () => {
		// const greaterThanFifty = (num) => {
		// 	if (num > 50) {
		// 		return true;
		// 	}
		// 	return false;
		// };
		// greater than 50
		it('should return true if input is greater than fifty', () => {
			const actual = helpers.greaterThanFifty(51);
			expect(actual).toEqual(true);
		});

		// less than 50
		it('should return false if input is less than 51', () => {
			const actual = helpers.greaterThanFifty(50);
			expect(actual).toEqual(false);
		});

		// input null
		it('should throw an error if input is null', () => {
			expect(() => {
				helpers.greaterThanFifty();
			}).toThrowError();
		});

		// input not a number
		it('should throw an error if the input is not a number', () => {
			expect(() => {
				helpers.greaterThanFifty('42');
			}).toThrowError();
		});
	});

	describe('add()', () => {
		// const add = (x, y) => {
		// 	return x + y;
		// };
		// expected addition
		it('should add provided nums together', () => {
			const actual = helpers.add(2, 3);
			expect(actual).toEqual(5);
		});

		// input null
		it('should throw an error when called with no value', () => {
			expect(() => {
				helpers.add(4);
			}).toThrowError();
		});

		// input string
		it('should throw error when called with a string', () => {
			expect(() => {
				helpers.add('5', 4);
			}).toThrowError();
		});
	});

	describe('subtract()', () => {
		// const subtract = (x, y) => {
		// 	return x - y;
		// };
		// expected subtraction
		it('should subtract provided nums', () => {
			const actual = helpers.subtract(10, 5);
			expect(actual).toEqual(5);
		});

		// input null
		it('should throw an error when called with no values', () => {
			expect(() => {
				helpers.subtract(11);
			}).toThrowError();
		});

		// input string
		it('should throw an error when called with a string', () => {
			expect(() => {
				helpers.subtract(4, '4');
			}).toThrowError();
		});
	});

	describe('divide()', () => {
		// const divide = (x, y) => {
		// 	return x / y;
		// };
		// expected division
		it('should divide the provided numbers', () => {
			const actual = helpers.divide(20, 4);
			expect(actual).toEqual(5);
		});

		// input null
		it('should throw an error when called with no values', () => {
			expect(() => {
				helpers.divide(3);
			}).toThrowError();
		});

		// input string
		it('should throw an error when called with a string', () => {
			expect(() => {
				helpers.divide(10, '2');
			}).toThrowError();
		});
	});

	describe('multiply()', () => {
		// const multiply = (x, y) => {
		// 	return x * y;
		// };
		// expected multiplication
		it('should multiply the provided numbers', () => {
			const actual = helpers.multiply(20, 5);
			expect(actual).toEqual(100);
		});

		// input null
		it('should throw an error when called with no values', () => {
			expect(() => {
				helpers.multiply(10);
			}).toThrowError();
		});

		// input string
		it('should throw an error when called with a string', () => {
			expect(() => {
				helpers.multiply(10, '5');
			}).toThrowError();
		});
	});

	describe('getRemainder()', () => {
		// const getRemainder = (x, y) => {
		// 	return x % y;
		// };
		// expected remainder
		it('should return remainder of provided numbers', () => {
			const actual = helpers.getRemainder(20, 3);
			expect(actual).toEqual(2);
		});

		// input null
		it('should throw an error when called with no values', () => {
			expect(() => {
				helpers.getRemainder(4);
			}).toThrowError();
		});

		// input string
		it('should throw an error when called with a string', () => {
			expect(() => {
				helpers.getRemainder(20, '3');
			}).toThrowError();
		});
	});

	describe('isEven()', () => {
		// const isEven = (num) => {
		// 	if (num % 2 === 0) {
		// 		return true;
		// 	}
		// 	return false;
		// };
		// expected bool
		it('should return true if input is even', () => {
			const actual = helpers.isEven(42);
			expect(actual).toEqual(true);
		});

		// input null
		it('should throw an error when called with no value', () => {
			expect(() => {
				helpers.isEven();
			}).toThrowError();
		});

		// input string
		it('should throw an error when called with a string', () => {
			expect(() => {
				helpers.isEven('42');
			}).toThrowError();
		});
	});

	// const isOdd = (num) => {
	// 	if (num % 2 === 0) {
	// 		return false;
	// 	}
	// 	return true;
	// };

	// const square = (num) => {
	// 	return num * num;
	// };

	// const cube = (num) => {
	// 	return num * num * num;
	// };

	// const raiseToPower = (num, exponent) => {
	// 	return num ** exponent;
	// };

	// const roundNumber = (num) => {
	// 	return Math.round(num);
	// };

	// const roundUp = (num) => {
	// 	return Math.ceil(num);
	// };

	// const addExclamationPoint = (str) => {
	// 	return (str += '!');
	// };

	// const combineNames = (firstName, lastName) => {
	// 	return `${firstName} ${lastName}`;
	// };

	// const getGreeting = (name) => {
	// 	return `Hello ${name}!`;
	// };

	// const getRectangleArea = (length, width) => {
	// 	return length * width;
	// };

	// const getTriangleArea = (base, height) => {
	// 	return 0.5 * base * height;
	// };

	// const getCircleArea = (radius) => {
	// 	return Math.PI * radius * radius;
	// };

	// const getRectangularPrismVolume = (length, width, height) => {
	// 	return width * height * length;
	// };
});
