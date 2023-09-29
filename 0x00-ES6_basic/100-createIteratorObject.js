/* Function that returns an iterator o go through every employee in every department
 * It takes into arg a report object from previous function
 * Using next() method
*/

export default function createIteratorObject(report) {
  const allEmployees = [];
  Object.values(report.allEmployees).forEach((department) => {
    department.forEach((employee) => {
      allEmployees.push(employee);
    });
  });

  return {
    * [Symbol.iterator]() {
      yield* allEmployees;
    },
  };
}
