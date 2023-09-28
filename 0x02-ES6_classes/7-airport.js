export default class Airport {
  constructor(name, code) {
    this._code = code;
    this._name = name;
  }

  /* use symbol.toStringTag to override default toString() */
  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
