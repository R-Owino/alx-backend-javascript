/* Function that returns an array of students for a specific city with their new grade
 * Args: students (array of objects), city (string), and newGrades (Array of “grade” objects)
 * Final grade shoudl be N/A if a student doesn't have grade in newGrades
 */

export default function updateStudentGradeByCity(arr, city, newGrades) {
  const studentsByCity = arr.filter((student) => student.location === city);
  const studentsWithGrades = studentsByCity.map((student) => {
    const studentGrade = newGrades.filter((grade) => grade.studentId === student.id)[0];
    return {
      ...student,
      grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });
  return studentsWithGrades;
}
