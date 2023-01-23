import _ from 'lodash';
import Deck from '../Deck';

export default class Game {
  constructor() {
    this._turn = 0;
    this._time = 0;
    this._playing = false;
    this._loading = false;
    this._flipTimeout = null;
    this._shufleCards();
  }

  onGameOver(gameOverFunction) {
    this._onGameOver = gameOverFunction;
  }

  _shufleCards() {
    const cardsWithPairs = [].concat(_.cloneDeep(Deck), _.cloneDeep(Deck));
    this._cards = _.shuffle(cardsWithPairs);
  }

  _checkHasMatched() {
    const cards = this._selectedCards;
    if (cards.length < 2) {
      return;
    }
    this._turn += 1;
    this._loading = true;
    clearTimeout(this._flipTimeout);
    this._flipTimeout = setTimeout(() => {
      this._loading = false;
      cards.forEach((card) => {
        card.toggleSelected();
        if (cards[0].title === cards[1].title) {
          card.hasFounded();
        }
      });
      if (this.hasGameOver) {
        this._onGameOver();
      }
    }, 1000);
  }

  _startGame() {
    if (this._playing) {
      return;
    }
    this._playing = true;
    clearInterval(this._interval);
    this._interval = setInterval(() => {
      if (!this.hasGameOver) {
        this._time += 1;
      }
    }, 1000);
  }

  selectCard(index) {
    if (this._loading) {
      return;
    }
    this._startGame();
    const card = this._cards[index];
    if (!card.flipped) {
      this._cards[index].toggleSelected();
      this._checkHasMatched();
    }
  }

  get cards() {
    return this._cards;
  }

  get _selectedCards() {
    return this.cards.filter(card => card.selected);
  }

  get time() {
    return this._time;
  }

  get turn() {
    return this._turn;
  }

  get hasGameOver() {
    return this._cards.filter(card => card.flipped).length === this.cards.length;
  }
}
