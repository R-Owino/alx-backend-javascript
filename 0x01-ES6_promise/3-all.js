/* collectively resolve all promises and log body firstName lastName to the console
 * if an error, log Signup system offline to the console
 */

import { uploadPhoto, createUser } from './utils';

const handleProfileSignup = async () => {
  try {
    const [photoResponse, user] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(photoResponse.body, user.firstName, user.lastName);
  } catch (error) {
    console.log('Signup system offline');
  }
};

export default handleProfileSignup;
