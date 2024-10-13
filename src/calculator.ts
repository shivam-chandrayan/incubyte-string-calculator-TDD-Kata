export function add(expression: string): number {
  const pieces: string[] = expression.split(",");
  const num1: number = isNaN(parseInt(pieces[0])) ? 0 : parseInt(pieces[0]);
  const num2: number = isNaN(parseInt(pieces[1])) ? 0 : parseInt(pieces[1]);
  return num1 + num2;
}
