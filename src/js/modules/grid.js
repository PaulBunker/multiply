import magicString from './magicStrings';
import Card from './card';

export default class Grid {

  constructor(element, settings) {

    settings = settings || {};

    this.cards = [];
    this.element = element;
    this.settings = {
      numCards: settings.numCards || 144
    };

    this.renderGrid();
    this.addEventListeners();
  }

  renderGrid() {

    // Starting the loop from the number 1 rather than 0
    // using 'i' as readable index.

    for (var i = 1; i <= this.settings.numCards; i++) {

      // Create an instance of 'Card'.
      const card = new Card(i);

      // Keep track of the card objects.
      this.cards.push(card);

      // Add the card 'node' to the DOM.
      this.element.appendChild(card.node);
    }
  }

  reset() {
    // Reset the board to a blank state
    this.cards.forEach(card => {
      card.removeHighlight();
    });
  }

  isMultiple(check, base) {
    return (check % base == 0);
  }

  update(evt) {
    const activeNum = evt.detail.card.number;

    this.cards.forEach(card => {
      if (this.isMultiple(card.number, activeNum)) {
        card.addHighlight(activeNum);
      } else {
        card.removeHighlight();
      }
    });
  }

  addEventListeners() {
    // Here we listen for the custom events

    this.element.addEventListener(magicString.RESET,
      this.reset.bind(this));

    this.element.addEventListener(magicString.UPDATE,
      this.update.bind(this));
  }

}
