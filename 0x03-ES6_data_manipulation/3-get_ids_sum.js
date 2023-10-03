/* Function that returns the sum of all student ids
 * Accepts a list of students as a parameter
 */

export default function getStudentIdsSum(arr) {
  const sum = (accumulator, currentValue) => accumulator + currentValue.id;
  return arr.reduce(sum, 0);
}
