require('chromedriver');
var selenium = require('selenium-webdriver');


describe('Multiply test:', function() {

  // Open the local website
  beforeEach( done => {
    this.driver = new selenium.Builder()
      .forBrowser('chrome')
      .build();
    this.driver.get('http://localhost:8000/index.html').then(done);
  });


  // Close the website after each test is run
  afterEach( done => {
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    return this.driver.quit().then(done);

  });

  // Test to ensure tests work
  it('Test can get card', done => {
    this.driver.findElement(selenium.By.tagName('body'));
    expect(true).toBe(true);
    done();
  });

  it('Should exist', done => {
    var driver = this.driver;
    var card = driver.wait(selenium.until.elementLocated(selenium.By.css('.card')));
    card.click();
    expect(true).toBe(true);
    done();
  });


  // Test to ensure we highlight the
  it('Should highlight', done => {
    var element = this.driver.findElement(selenium.By.css('.card'));
    element.click();
    element.getAttribute('class').then(className => {
      expect(className).toBe('card card__highlight');
    });
    done();
  });

  // Test to ensure we have the right number of cards
  it('Should be 144 cards', done => {
    this.driver.findElements(selenium.By.className('card')).then(elements => {
      expect(elements.length).toBe(144);
    });
    done();
  });

  // Test to ensure all cards are highlighted after clicking 1'st card
  it('Should highlight all 144 cards', done => {
    var element = this.driver.findElement(selenium.By.css('.card'));
    element.click();
    this.driver.findElements(selenium.By.className('card__highlight')).then(elements => {
      expect(elements.length).toBe(144);
    });
    done();
  });

  // Test to ensure cards are un-highlighted after second click
  it('Should un-highlight all the cards', done => {
    const element = this.driver.findElement(selenium.By.css('.card'));
    element.click();
    this.driver.sleep(500);
    element.click();
    this.driver.findElements(selenium.By.className('card__highlight')).then(elements => {
      expect(elements.length).toBe(0);
    });
    done();
  });

  // Test to ensure the first card isn't highlighted after clicking the second card
  it('First card should not be highlighted', done => {
    this.driver.findElements(selenium.By.css('.card')).then(elements => {
      elements[1].click();
      elements[0].getAttribute('class').then(className => {
        // NOT 'card card__highlight'
        expect(className).toBe('card');
      });
    });
    done();
  });


});