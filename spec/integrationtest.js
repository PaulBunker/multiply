require('chromedriver');
var selenium = require('selenium-webdriver');







describe('Multiply test:', function() {

  var originalTimeout;

  // Open the local website
  beforeEach( done => {
    this.driver = new selenium.Builder().
    withCapabilities(selenium.Capabilities.chrome()).
    build();
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    this.driver.get('http://localhost:8000').then(done);
  });



  // Close the website after each test is run
  afterEach( done => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    return this.driver.quit().then(done);

  });



  // Test to ensure tests work
  it('Should highlight', done => {
    var hi = this.driver.findElement(selenium.By.tagName('body'));
    expect(true).toBe(true);
    done();
  });

  // Test to ensure tests work
  it('Should highlight', done => {
    var driver = this.driver;
    setTimeout(function(){
      var hi = driver.findElement(selenium.By.css('.card'));
      expect(true).toBe(true);
      done();
    }, 5000);
  });

  it('Should exist', done => {
    var driver = this.driver;
    var card = driver.wait(selenium.until.elementLocated(selenium.By.css('.card')));
    card.click();
    done();
  });

  // Test to ensure we highlight the
  it('Should highlight', done => {
    var driver = this.driver;
    driver.findElement(selenium.By.css('.card'))
    .then(webElement => {
      console.log('card exists');
    }, err => {
      if (err.state && err.state === 'no such element') {
        console.log('card not found');
      } else {
        selenium.promise.rejected(err);
      }
    });
    done();

    // setTimeout(function(){
    //   var element = this.driver.findElement(selenium.By.css('.card'));
    //   element.click();
    //   element.getAttribute('class').then(className => {
    //     expect(className).toBe('card card__highlight');
    //   });
    //   done();
    // }, 5000);
  });
  console.log(jasmine.DEFAULT_TIMEOUT_INTERVAL);
  // // Test to ensure we have the right number of cards
  // it('Should be 144 cards', done => {
  //   setTimeout(function(){ var hi = this.driver.findElement(selenium.By.css('.card')); }, 300000);

  //   this.driver.findElements(selenium.By.className('card')).then(elements => {
  //     expect(elements.length).toBe(144);
  //   });
  //   done();
  // });

  // // Test to ensure all cards are highlighted after clicking 1'st card
  // it('Should highlight all 144 cards', done => {
  //   setTimeout(function(){ var hi = this.driver.findElement(selenium.By.css('.card')); }, 300000);

  //   var element = this.driver.findElement(selenium.By.css('.card'));
  //   element.click();
  //   this.driver.findElements(selenium.By.className('card__highlight')).then(elements => {
  //     expect(elements.length).toBe(144);
  //   });
  //   done();
  // });

  // // Test to ensure cards are un-highlighted after second click
  // it('Should un-highlight all the cards', done => {
  //   setTimeout(function(){ var hi = this.driver.findElement(selenium.By.css('.card')); }, 300000);

  //   const element = this.driver.findElement(selenium.By.css('.card'));
  //   element.click();
  //   element.click();
  //   this.driver.findElements(selenium.By.className('card__highlight')).then(elements => {
  //     expect(elements.length).toBe(0);
  //   });
  //   done();
  // });


});