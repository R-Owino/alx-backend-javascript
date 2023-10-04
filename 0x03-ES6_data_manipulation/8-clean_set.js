/* Function that returns a string of all the set values that start with a specific string
    * @param {string} startString - the string that the set values should start with
    * @param {Set} set - the set that the values should be taken from
 * When value starts with StartString, append the rest of the value to the set
 * Return the set
 */

export default function cleanSet(set, startString) {
  let output = '';

  if (!startString || !startString.length) {
    return output;
  }

  for (const elem of set) { // eslint-disable-line no-restricted-syntax
    if (elem && elem.startsWith(startString)) {
      output += `${elem.slice(startString.length)}-`;
    }
  }

  return output.slice(0, output.length - 1);
}
