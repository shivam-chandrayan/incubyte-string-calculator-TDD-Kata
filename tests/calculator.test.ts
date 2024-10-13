import { add } from "../src/calculator";

// Helper function to run the tests
const runTests = (testCases: [string, number][]) => {
  it.each(testCases)(
    'should evaluate expression "%s" to be %d',
    (expression: string, result: number) => {
      expect(add(expression)).toBe(result);
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
    const basicTests: [string, number][] = [["1\n5", 6]];

    runTests(basicTests);
  });
});
