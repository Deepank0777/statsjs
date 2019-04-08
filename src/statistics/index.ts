/** Calculate the arithmetic mean ("the average") of data:
 *
 * @param data Array of Numbers
 */
export const mean = (data: number[]): number => {
  if (data.length < 1) {
    throw new Error('mean requires at least one data point');
  }
  return data.reduce((a, b) => a + b) / data.length;
};
/** Calculate the Harmonic mean of data:
 *
 * @param data Array of Numbers
 * @param precision Number of digits after decimal point
 */
export const harmonicMean = (data: number[], precision: number = 2): number => {
  if (data.length < 1) {
    throw new Error('harmonic mean requires at least one data point');
  }
  const sum = data.reduce((a, b) => a + 1 / b, 0);
  return Number.parseFloat((data.length / sum).toFixed(precision));
};
/** Calculate the Median of data:
 *
 * @param data Array of Numbers
 */
export const median = (data: number[]): number => {
  const sortedNumbers = data.sort();
  const n = Math.floor(data.length / 2);
  if (data.length % 2 === 0) {
    return (sortedNumbers[n - 1] + sortedNumbers[n]) / 2;
  } else {
    return sortedNumbers[n];
  }
};
