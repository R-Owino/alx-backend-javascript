/* Function that returns a string of all the set values that start with a specific string (startString)
    * @param {string} startString - the string that the set values should start with
    * @param {Set} set - the set that the values should be taken from
 * When value starts with StartString, append the rest of the value to the set
 * Return the set
 */

export default function cleanSet(set, startString) {
    const matchingValues = [...set].filter(element => element.startsWith(startString));
    const output = matchingValues.map(value => value.slice(startString.length)).join('-');
    return output;
}