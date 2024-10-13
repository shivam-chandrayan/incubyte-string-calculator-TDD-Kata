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
    const basicTests: [string, number][] = [["", 0]];

    runTests(basicTests);
  });
});
