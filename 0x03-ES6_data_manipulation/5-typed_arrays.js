/* Function that returns a new ArrayBuffer with an Int8 value at a specific position.
 * Args: length, position, and value
 * Throws "Position outside range" if adding the value is not possible
 */

export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  view[position] = value;

  return new DataView(buffer);
}
