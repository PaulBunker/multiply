import { expect } from 'chai';

import jsdom from 'mocha-jsdom';
jsdom();

import Card from '../src/js/modules/card.js';
import Grid from '../src/js/modules/grid.js';

suite('Card Testing', () => {
  test('Creating Card', done => {
    var card = new Card(1);
    expect(card.number).to.eql(1);
    done();
  });
});

suite('Grid Testing', () => {
  test('Creating Grid', done => {
    document.body.innerHTML = '<div class="grid"></div>';
    var grid = new Grid(document.querySelector('.grid'));
    expect(grid.cards.length).to.eql(144);
    done();
  });
  test('Settings override', done => {
    document.body.innerHTML = '<div class="grid"></div>';
    var grid = new Grid(document.querySelector('.grid'), { numCards:1 });
    expect(grid.cards.length).to.eql(1);
    done();
  });
  test('isMutiple? No', done => {
    document.body.innerHTML = '<div class="grid"></div>';
    var grid = new Grid(document.querySelector('.grid'), { numCards:1 });
    expect(grid.isMultiple(3,5)).to.eql(false);
    done();
  });
  test('isMutiple? Yes', done => {
    document.body.innerHTML = '<div class="grid"></div>';
    var grid = new Grid(document.querySelector('.grid'), { numCards:1 });
    expect(grid.isMultiple(5,5)).to.eql(true);
    done();
  });
  test('isMutiple? Yes', done => {
    document.body.innerHTML = '<div class="grid"></div>';
    var grid = new Grid(document.querySelector('.grid'), { numCards:1 });
    expect(grid.isMultiple(20,10)).to.eql(true);
    done();
  });
});
