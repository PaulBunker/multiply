import magicString from './magisStrings';

export default class Card {

  constructor(i) {
    this.number = i;
    this.isActive = false;
    this.node = this.createCard();
    this.addEventListeners();
  }

  createCard() {

    // Create the html for the card.
    // Would be nice to use jsx here?

    const node = document.createElement('div');
    const span = document.createElement('span');
    const textnode = document.createTextNode(this.number);

    node.classList.add('card');
    span.classList.add('card__text');

    span.appendChild(textnode);
    node.appendChild(span);

    return node;
  }

  clicked() {
    if (this.isActive) {
      this.dispatchCancelEvent();
    } else {
      this.dispatchUpdateEvent();
    }
  }

  dispatchUpdateEvent() {

    const updateEvent = new CustomEvent(magicString.UPDATE, {
      detail: {
        card: this
      },
      bubbles: true,
      cancelable: false
    });

    this.node.dispatchEvent(updateEvent);

  }

  dispatchCancelEvent() {

    const cancelEvent = new CustomEvent(magicString.CANCEL, {
      detail: {
        card: this
      },
      bubbles: true,
      cancelable: false
    });

    this.node.dispatchEvent(cancelEvent);

  }

  addEventListeners() {
    this.node.addEventListener('click', this.clicked.bind(this), false);
  }

  addHighlight(activeNum) {
    if (this.number === activeNum) {
      this.isActive = true;
    }

    this.node.classList.add('card__highlight');
  }

  removeHighlight() {
    this.isActive = false;
    this.node.classList.remove('card__highlight');
  }

}

