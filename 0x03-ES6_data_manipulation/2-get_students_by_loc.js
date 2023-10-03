/* Returns an array of students who are located in the given location */

export default function getStudentsByLocation(arr, city) {
  if (Array.isArray(arr)) {
    return arr.filter((item) => item.location === city);
  }
  return [];
}
