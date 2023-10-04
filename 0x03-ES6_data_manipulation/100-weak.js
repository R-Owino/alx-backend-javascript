/* Exports a const instance of WeakMap */

/* WeakMap to store the query counts for each endpoint */
const weakMap = new WeakMap();

/* queryAPI function */
function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const currentCount = weakMap.get(endpoint);
    weakMap.set(endpoint, currentCount + 1);

    /* Check if the count is >= 5, and throw an error if so */
    if (currentCount + 1 >= 5) {
      throw new Error(`Endpoint load is high: ${endpoint.protocol}://${endpoint.name}`);
    }
  }
}

/* Export the weakMap and queryAPI function */
module.exports = { weakMap, queryAPI };
