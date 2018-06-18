const helpers = require("./project-1");

const testWrongTypes = (functionTested, expectedType, failReturn) => {
  const dataTypes = [
    "doggie",
    true,
    null,
    undefined,
    { key: "value" },
    NaN,
    17
  ];
  it(`Returns ${failReturn} if not given a ${expectedType}`, () => {
    dataTypes.forEach(type => {
      if (typeof type !== expectedType)
        expect(functionTested(type, type, type)).toBe(failReturn);
    });
  });
};

// start testing!
describe("multiplyByTen", () => {
  testWrongTypes(helpers.multiplyByTen, "number", undefined);

  it("returns 10n when given a number n", () => {
    expect(helpers.multiplyByTen(0)).toBe(0);
    expect(helpers.multiplyByTen(10.11)).toBe(101.1);
    expect(helpers.multiplyByTen(2)).toBe(20);
    expect(helpers.multiplyByTen(-3)).toBe(-30);
  });
});

describe("subtractFive", () => {
  testWrongTypes(helpers.subtractFive, "number", undefined);

  it("returns n - 5 when given a number n", () => {
    expect(helpers.subtractFive(0)).toBe(-5);
    expect(Number(helpers.subtractFive(10.12).toFixed(2))).toBe(5.12);
    expect(helpers.subtractFive(2)).toBe(-3);
    expect(helpers.subtractFive(-3)).toBe(-8);
  });
});

describe("areSameLength", () => {
  testWrongTypes(helpers.areSameLength, "string", undefined);

  it("Checks if two strings are the same length", () => {
    expect(helpers.areSameLength("sdfsdf", "sdfsdf")).toBe(true);
    expect(helpers.areSameLength("dostuff", "dothings")).toBe(false);
    expect(helpers.areSameLength("iamacoolstring", "iamalamestring")).toBe(
      true
    );
    expect(helpers.areSameLength("aaaa", "aaa")).toBe(false);
  });
});

describe("areEqual", () => {
  it("Checks if two anythings are the same", () => {
    expect(helpers.areEqual("sdfsdf", "sdfsdf")).toBe(true);
    expect(helpers.areEqual(5, "5")).toBe(false);
    expect(helpers.areEqual("iamacoolstring", "iamalamestring")).toBe(false);
    expect(helpers.areEqual(6, 6)).toBe(true);
    expect(helpers.areEqual(7, undefined)).toBe(false);
    expect(helpers.areEqual(NaN, null)).toBe(false);
    expect(helpers.areEqual(false, 0)).toBe(false);
    expect(helpers.areEqual(true, { key: "value" })).toBe(false);
    expect(helpers.areEqual(false, "false")).toBe(false);
    expect(helpers.areEqual(false, false)).toBe(true);
  });
});

describe("lessThanNinety", () => {
  testWrongTypes(helpers.lessThanNinety, "number", undefined);

  it("Checks if a number is less than 90", () => {
    expect(helpers.lessThanNinety(0)).toBe(true);
    expect(helpers.lessThanNinety(91)).toBe(false);
    expect(helpers.lessThanNinety(90)).toBe(false);
    expect(helpers.lessThanNinety(-81)).toBe(true);
    expect(helpers.lessThanNinety(45)).toBe(true);
    expect(helpers.lessThanNinety(Number.NEGATIVE_INFINITY)).toBe(true);
    expect(helpers.lessThanNinety(Number.POSITIVE_INFINITY)).toBe(false);
  });
});

describe("greaterThanFifty", () => {
  testWrongTypes(helpers.greaterThanFifty, "number", undefined);

  it("Checks if a number is greater than 50", () => {
    expect(helpers.greaterThanFifty(0)).toBe(false);
    expect(helpers.greaterThanFifty(91)).toBe(true);
    expect(helpers.greaterThanFifty(50)).toBe(false);
    expect(helpers.greaterThanFifty(-81)).toBe(false);
    expect(helpers.greaterThanFifty(45)).toBe(false);
    expect(helpers.greaterThanFifty(Number.NEGATIVE_INFINITY)).toBe(false);
    expect(helpers.greaterThanFifty(Number.POSITIVE_INFINITY)).toBe(true);
  });
});
