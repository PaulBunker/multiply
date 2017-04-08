# README #

### Which Technical Test ###

Front End Technical Question

**Goal**: Production of a client side Web application to help a child understand multiplication.

**Duration:** This test is intended to take ~2 hours but may take more

**Description:** The application will display a grid of all the numbers from 1 to 144 evenly laid out
with a large clickable box around each number. The number should be centered in each box.
When the child clicks a box then all the numbers which are a multiple of that number should be
highlighted in some way. *Clicking a second time on a previously highlighted number should
remove all highlighting from numbers that are multiples of the number that is clicked.*

(I think the wording of the last sentence could be better)

**Constraints:** On mobile devices the grid will display 1 number per row. On tablet devices 2
numbers per row and on desktop and larger devices 3 numbers per row. The numbers should
fill their rows equally. When the screen width grows very large a margin should appear either
side of the grid so that the boxes don’t keep getting larger.

No code libraries should be used, but a library can be used for testing: the exercise is intended
to demonstrate personal knowledge and experience rather than use of libraries.

If there is any information that you feel is missing from the story then please make sensible
decisions (for example it’s up to you how you define ‘mobile’, as long as it’s sensible, similarly
please define highlighting).

**Criteria for assessment**: Important things that will be assessed are:

1. Project layout.
2. Coding style (HTML, CSS, JavaScript and tests).
3. The test code that you write.
4. Use of object oriented JavaScript.
5. Use of responsive design.
6. Naming conventions used.
7. Meeting the requirements.

The test won’t be assessed on design at all, so don’t worry how it looks.

### How do I get set up? ###

clone the repo, cd into the directory then:

`npm install`

`grunt`

### Testing? ###

For unit testing
`npm test`

For integration testing:
Download the latest version of the ChromeDriver
visit http://chromedriver.storage.googleapis.com/index.html

`jasmine spec/integrationtest.js`

### TODO: ###
* livereload
* autoprefixer
* more tests
