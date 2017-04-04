import customEvents from '../polyfills/customEvent';
customEvents();

import Grid from './modules/grid';

new Grid(document.querySelector('.grid'));


