/* returns a promise
 * whem param is true, resolve by passing an object with 2 attributes:
    *  - status: 200
    * - body: 'Success'
 * when param is false, reject with the message The fake API is not working currently
*/

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
