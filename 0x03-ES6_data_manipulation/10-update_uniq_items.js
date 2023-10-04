/* Function that returns updated map for all items with initial quantity at 1
    * @param {Map} map - the map to modify
    * When quantity is 1, update the quantity to 100
    * Return the updated map
    * throw "cannot process" error if param is not a map
    */

export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map) { // eslint-disable-line no-restricted-syntax
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
