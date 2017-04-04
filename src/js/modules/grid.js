import events from './events';
import Card from './card';

import customEvents from '../polyfills/customEvent';
customEvents();

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
    // Get the 'activeNum' from the card that was clicked
    const activeNum = evt.detail.card.number;

    // loop through the cards and ascertain if
    // the card number is a multiple of 'activeNum'
    this.cards.forEach(card => {
      if (this.isMultiple(card.number, activeNum)) {
        card.addHighlight(activeNum);
      } else {
        // We do this here so as to avoid an extra
        // loop of the cards if we had reset the
        // board before calling update
        card.removeHighlight();
      }
    });
  }

  addEventListeners() {
    // Here we listen for the custom events

    this.element.addEventListener(events.RESET,
      this.reset.bind(this));

    this.element.addEventListener(events.UPDATE,
      this.update.bind(this));
  }

}
