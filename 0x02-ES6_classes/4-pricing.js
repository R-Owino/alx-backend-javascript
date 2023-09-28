import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  // getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  // displayFullPrice method
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // static method convertPrice
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
