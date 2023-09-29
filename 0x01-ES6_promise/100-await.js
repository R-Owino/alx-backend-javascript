/* async function that will call below two functions and return an object */

import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const p = await uploadPhoto();
    const u = await createUser();

    return { photo: p, user: u };
  } catch (error) {
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;
