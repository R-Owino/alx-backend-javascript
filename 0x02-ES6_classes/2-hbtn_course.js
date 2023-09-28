/* Implement a class named HolbertonCourse
 * Constructor attributes: name, length, students
 * Implement a getter and setter for each attribute
 */

export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'name');
    this._length = this._validateNumber(length, 'length');
    this._students = this._validateStudents(students, 'students');
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    this._name = this._validateString(newName, 'name');
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(newLength) {
    this._length = this._validateNumber(newLength, 'length');
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(newStudents) {
    this._students = this._validateStudents(newStudents, 'students');
  }

  // Private validation method for string attributes
  _validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  // Private validation method for number attributes
  _validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  // Private validation method for students attribute
  _validateStudents(value, attribute) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError(`${attribute} must be an array of strings`);
    }
    return value;
  }
}
