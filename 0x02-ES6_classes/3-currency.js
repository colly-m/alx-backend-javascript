export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter and Setter for code
  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  // Gets and Sets and name
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  // Method to display the whole currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
