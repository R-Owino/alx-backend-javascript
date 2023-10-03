/* function that gets a list of student ids 
 * if the arg is not an array, it returns an empty array
 * This function takes one argument which is an array of objects
 * this array is the same format as getListStudents from the previous task.
 */

export default function getListStudentIds = (arr) => {
    if (Array.isArray(arr)) {
        return arr.map((item) => item.id);
    }
    return [];
}
