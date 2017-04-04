<<<<<<< HEAD
import customEvents from './polyfills/customEvent';
=======
// Polyfill for custom events used in card.js;
import customEvents from '../polyfills/customEvent';
>>>>>>> develop
customEvents();

import Grid from './modules/grid';

new Grid(document.querySelector('.grid'));


