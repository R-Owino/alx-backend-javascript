/* Function that returns a boolean if all the elements in the array exist within the set
 * @param {array} array - array of values to check
 * @param {set} set - set of values to check
 */

export default function hasValuesFromArray(set, array) {
  for (const elem of array) { // eslint-disable-line no-restricted-syntax
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
