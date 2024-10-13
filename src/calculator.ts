export class NegativeNumberError extends Error {
  constructor(negativeNumbers: number[]) {
    super(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    this.name = "NegativeNumberError";
  }
}

function splitNumbers(expression: string): string[] {
  if (expression.startsWith("//")) {
    const parts = expression.split("\n");
    const delimiter = parts[0].slice(2);
    const numbers = parts[1];
    return numbers.split(delimiter);
  }

  return expression.split(/,|\n/g);
}

function sumNumbers(numbers: string[]): number {
  const negativeNumbers: number[] = [];
  const sum = numbers
    .map((piece) => {
      const num = parseInt(piece);
      if (num < 0) negativeNumbers.push(num);
      return num;
    })
    .filter((num) => !isNaN(num))
    .reduce((acc, num) => acc + num, 0);

  if (negativeNumbers.length > 0) {
    throw new NegativeNumberError(negativeNumbers);
  }

  return sum;
}

export function add(expression: string): number {
  const pieces = splitNumbers(expression);
  return sumNumbers(pieces);
}
