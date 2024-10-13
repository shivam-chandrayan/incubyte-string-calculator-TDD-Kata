export function add(expression: string): number {
  const result = parseInt(expression);
  return isNaN(result) ? 0 : result;
}
