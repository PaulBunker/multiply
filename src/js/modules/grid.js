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
    // Starting the loop from the number 1 rather than 0 using 'i' as readable index
    for (var i = 1; i <= this.settings.numCards; i++) {
      const card = new Card(i);
      this.cards.push(card);
      this.element.appendChild(card.node);
    }
  }

  cancel() {
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
    this.element.addEventListener('cancel', this.cancel.bind(this));
    this.element.addEventListener('update', this.update.bind(this));
  }

}
