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
  return numbers
    .map((piece) => parseInt(piece))
    .filter((num) => !isNaN(num))
    .reduce((sum, num) => sum + num, 0);
}

export function add(expression: string): number {
  const pieces = splitNumbers(expression);
  return sumNumbers(pieces);
}
