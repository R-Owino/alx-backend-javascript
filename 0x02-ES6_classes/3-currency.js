/* Implements a class named Currency
 * Constructor attributes: code, name
 * Implements a getter and setter for each attribute
 * Implements a method displayFullCurrency that returs attributes as name (code)
 */

export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  // Static Method displayFullCurrency()
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
