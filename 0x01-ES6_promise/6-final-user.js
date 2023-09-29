/* Import signUpUser and uploadPhoto
 * Export funcrion that accepsts 3 arguments:
    * firstName (string)
    * lastName (string)
    * fileName (string)
 * returns an array with this structure:
 * [
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]
 */

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const output = [];
      results.forEach((result) => {
        output.push({
          status: result.status,
          value: result.value,
        });
      });
      return output;
    });
}
