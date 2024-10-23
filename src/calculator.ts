export class NegativeNumberError extends Error {
  constructor(negativeNumbers: number[]) {
    super(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    this.name = "NegativeNumberError";
  }
}

interface splittedNumbers {
  numbers: string[];
  shouldMultiply: boolean;
}

function splitNumbers(expression: string): splittedNumbers {
  let res: splittedNumbers = {
    numbers: [],
    shouldMultiply: false,
  };

  if (expression.startsWith("//")) {
    const parts = expression.split("\n");
    const delimiter = parts[0].slice(2);
    const numbers = parts[1];
    const delimiterRegex = new RegExp(
      delimiter.replace(/[-\/\\^$.*+?()[\]{}|]/g, "\\$&"),
      "g"
    );
    if (delimiter === "*") {
      res.shouldMultiply = true;
    }
    res.numbers = numbers.split(delimiterRegex);
    console.log(res);
    return res;
  }
  res.numbers = expression.split(/,|\n/g);
  return res;
}

function calculate(pieces: splittedNumbers): number {
  const negativeNumbers: number[] = [];

  const initialValue = pieces.shouldMultiply ? 1 : 0;

  const reduceOperation = (acc: number, num: number): number => {
    return pieces.shouldMultiply ? acc * num : acc + num;
  };

  const sum = pieces.numbers
    .map((piece) => {
      const num = parseInt(piece);
      if (num < 0) negativeNumbers.push(num);
      return num;
    })
    .filter((num) => !isNaN(num) && num <= 1000)
    .reduce(reduceOperation, initialValue);

  if (negativeNumbers.length > 0) {
    throw new NegativeNumberError(negativeNumbers);
  }

  return sum;
}

export function add(expression: string): number {
  const pieces = splitNumbers(expression);
  return calculate(pieces);
}
