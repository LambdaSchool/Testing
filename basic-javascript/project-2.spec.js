const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("getBiggest function", () => {
	// arrange
	const expected = 11;
	// act
	const getBiggest = funcs.getBiggest(8, 11);
	// assert
	it("returns which is biggest", () => {
		expect(getBiggest).toBe(expected);
	});
});

describe("greeting function", () => {
	it("returns greeting", () => {
		const German = "Guten Tag!";
		const ger = funcs.greeting("German");
		expect(ger).toBe(German);

		const Spanish = "Hola!";
		const span = funcs.greeting("Spanish");
		expect(span).toBe(Spanish);

		const English = "Hello!";
		const eng = funcs.greeting("English");
		expect(eng).toBe(English);
	});
});

describe("isTenOrFive function", () => {
	it("returns which is ten or five", () => {
		const five = funcs.isTenOrFive(5);
		const ten = funcs.isTenOrFive(10);

		expect(five).toBeTruthy();
		expect(ten).toBeTruthy();
	});
});

describe("isInRange function", () => {
	it("returns if a number is in range", () => {
		// const num = 40;
		// expect(num).toBeLessThan(50);
		// expect(num).toBeGreaterThan(20);
		const num = funcs.isInRange(40);
		expect(num).toBeTruthy();
	});
});

describe("isInteger function", () => {
	it("returns whether or not a number is an integer", () => {
		const int = Number.isInteger(20);

		expect(int).toBeTruthy();
	});
});



