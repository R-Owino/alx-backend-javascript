/* function that returns an array of objects
 * Each object has 3 attributes: id, firstName, location
 */

const getListStudents = () => {
  const arr = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  return arr;
};

export default getListStudents;
