import events from './events';

export default class Card {

  constructor(i) {
    this.number = i;
    this.isActive = false;
    this.rippleCircle;
    this.node = this.createCard();
    this.addEventListeners();
  }

  createCard() {

    // Create the html for the card.
    // Would be nice to use jsx here?

    const node = document.createElement('div');
    const span = document.createElement('span');
    const textnode = document.createTextNode(this.number);

    //element for the ripple effect
    this.rippleCircle = document.createElement('div');

    node.classList.add('card');
    span.classList.add('card__text');
    this.rippleCircle.classList.add('card__rippleCircle');

    span.appendChild(textnode);
    node.appendChild(span);
    node.appendChild(this.rippleCircle);

    return node;
  }

  clicked() {
    if (this.isActive) {
      this.dispatchCancelEvent();
    } else {
      this.dispatchUpdateEvent();
    }
  }

  doRipple(e) {

    // Get the position of the click
    // relative to the element

    const x = e.pageX - this.node.offsetLeft; // x position within the element
    const y = e.pageY - this.node.offsetTop;  // y position within the element

    this.rippleCircle.style.left = `${x}px`;
    this.rippleCircle.style.top = `${y}px`;
    this.rippleCircle.classList.add('is-active');

    this.rippleCircle.addEventListener(events.ANIMATIONEND, () => {
      this.rippleCircle.classList.remove('is-active');
    });

  }

  dispatchUpdateEvent() {

    const updateEvent = new CustomEvent(events.UPDATE, {
      detail: {
        card: this
      },
      bubbles: true,
      cancelable: false
    });

    this.node.dispatchEvent(updateEvent);

  }

  dispatchCancelEvent() {

    const cancelEvent = new CustomEvent(events.CANCEL, {
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
    this.node.addEventListener('click', this.doRipple.bind(this), false);
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

