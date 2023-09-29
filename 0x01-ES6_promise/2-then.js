/* Appends 3 handlers to the function
    1. onFulfilled returns object with status and body
    2. onRejected returns an empty errorobject
    3. For every resolution, log Got a response from the API to the console
    */

export default function handleResponseFromAPI(promise) {
  return promise.then(() => ({ status: 200, body: 'Success' }))
    .catch(() => Error())
    .finally(() => console.log('Got a response from the API'));
}
