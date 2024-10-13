import { add, NegativeNumberError } from "../src/calculator";

const runTests = (testCases: [string, number | NegativeNumberError][]) => {
  it.each(testCases)(
    'should evaluate expression "%s" to be %s',
    (expression: string, result: number | NegativeNumberError) => {
      if (result instanceof NegativeNumberError) {
        expect(() => add(expression)).toThrow(NegativeNumberError);
        expect(() => add(expression)).toThrow(result.message);
      } else {
        expect(add(expression)).toBe(result);
      }
    }
  );
};

describe("Calculator", () => {
  describe("Basic Operations", () => {
    const basicTests: [string, number][] = [
      ["", 0],
      ["24", 24],
    ];

    runTests(basicTests);
  });

  describe("Comma Delimiter", () => {
    const basicTests: [string, number][] = [
      ["1,5", 6],
      ["1,2,3", 6],
      ["1,2,3,4,5", 15],
      ["99,98,97,96,95,94,93,92,91,90", 945],
    ];

    runTests(basicTests);
  });

  describe("Newline Delimiter", () => {
    const basicTests: [string, number][] = [
      ["1\n5", 6],
      ["1\n2\n3\n4\n5", 15],
    ];

    runTests(basicTests);
  });

  describe("Mixed Delimiter", () => {
    const basicTests: [string, number][] = [["1\n2,3,4\n5", 15]];

    runTests(basicTests);
  });

  describe("Custom Delimiter", () => {
    const basicTests: [string, number][] = [["//;\n1;2", 3]];

    runTests(basicTests);
  });

  describe("Negative Numbers", () => {
    const negativeTests: [string, NegativeNumberError][] = [
      ["-1,2,3", new NegativeNumberError([-1])],
      ["1,-2,3", new NegativeNumberError([-2])],
      ["-1,-2", new NegativeNumberError([-1, -2])],
      ["1,2,-3,4", new NegativeNumberError([-3])],
      ["//;\n1;2;-3", new NegativeNumberError([-3])],
      ["//;\n-1;2", new NegativeNumberError([-1])],
    ];

    runTests(negativeTests);
  });
});
