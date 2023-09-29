/* Fucru=ion whose parameter is the return value from the previous function
 * Returns every employee name in a string separated by a | character
 */

export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const employee of reportWithIterator) {
    result += `${employee} | `;
  }

  return result.slice(0, result.length - 3);
}
