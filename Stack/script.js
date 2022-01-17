const Stack = require('./Stack.js');

const prompt = require('prompt-sync')();

// ------------------------------

// Initialization

// ------------------------------

const backPages = new Stack();

const nextPages = new Stack();

let currentPage = 'defaultPage';

let finish = false;

let showBack = false;

let showNext = false;

// ------------------------------

// Helper Functions

// ------------------------------

function showCurrentPage(action) {
  console.log(action);

  console.log(`Current page = ${currentPage}`);

  console.log(`Back Page = ${backPages.peek()}`);

  console.log(`Next Page = ${nextPages.peek()}`);
}

function newPage(page) {
  backPages.push(currentPage);

  currentPage = page;

  if (!nextPages.isEmpty()) {
    while (!nextPages.isEmpty()) {
      nextPages.pop();
    }
  }

  showCurrentPage('newPage');
}

function backPage() {
  nextPages.push(currentPage);

  currentPage = backPages.pop();

  showCurrentPage('backPage');
}

function nextPage() {
  backPages.push(currentPage);

  currentPage = nextPages.pop();

  showCurrentPage('nextPage');
}

/*

* The following strings are used to prompt the user

*/

const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? ';

// ------------------------------

// User Interface Part 1

// ------------------------------

showCurrentPage('DEFAULT:');

while (!finish) {
  let instructions = baseInfo;

  if (!backPages.isEmpty()) {
    instructions += `, ${backInfo}`;

    showBack = true;
  } else {
    showBack = false;
  }

  if (!nextPages.isEmpty()) {
    instructions += `, ${nextInfo}`;

    showNext = true;
  } else {
    showNext = false;
  }

  instructions += `, ${quitInfo}`;

  console.log(instructions);

  const answer = prompt('How are you today?');

  const lowerCaseAnswer = answer.toLowerCase();

  if (lowerCaseAnswer.length > 1) {
    newPage(lowerCaseAnswer);
  } else if (lowerCaseAnswer === 'b') {
    if (showBack) {
      backPage();
    } else {
      console.log('There no previous page to back!');
    }
  } else if (lowerCaseAnswer === 'n') {
    if (showNext) {
      nextPage();
    } else {
      console.log('There no next page to go!');
    }
  } else if (lowerCaseAnswer === 'q') {
    break;
  }
}

// ------------------------------

// User Interface Part 2

// ------------------------------
