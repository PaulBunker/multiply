export default class Card {

  constructor(i) {
    this.number = i;
    this.isActive = false;
    this.node = this.createCard();
    this.addEventListeners();
  }

  createCard() {
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
      this.isActive = false;
    } else {
      this.dispatchUpdateEvent();
      this.isActive = true;
    }
  }

  dispatchUpdateEvent() {

    const updateEvent = new CustomEvent('update', {
      detail: {
        card: this
      },
      bubbles: true,
      cancelable: false
    });

    this.node.dispatchEvent(updateEvent);

  }

  dispatchCancelEvent() {

    const cancelEvent = new CustomEvent('cancel', {
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

  addHighlight() {
    this.node.classList.add('card__highlight');
  }

  removeHighlight() {
    this.node.classList.remove('card__highlight');
  }

}

