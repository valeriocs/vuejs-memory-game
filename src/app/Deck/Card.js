export default class Card {
  constructor({ title, media }) {
    this._title = title;
    this._media = media;
    this._selected = false;
    this._founded = false;
  }

  toggleSelected() {
    this._selected = !this._selected;
  }

  hasFounded() {
    this._founded = true;
  }

  get title() {
    return this._title;
  }

  get media() {
    return this._media;
  }

  get selected() {
    return this._selected;
  }

  get flipped() {
    return this._selected || this._founded;
  }
}
