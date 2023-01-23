export default class Player {
  constructor() {
    this._name = null;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
