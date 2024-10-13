export function add(expression: string): number {
  const pieces: string[] = expression.split(",");
  const result = pieces
    .map((piece) => parseInt(piece))
    .filter((num) => !isNaN(num))
    .reduce((sum, num) => sum + num, 0);

  return result;
}
