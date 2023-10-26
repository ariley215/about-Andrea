'use strict';

function nameIs() {
  return prompt('Who are you?');
}

let HiIAm = nameIs();
console.log(`Hi ${HiIAm}`);

function greeting() {
  document.write(`Welcome ${HiIAm}, stay and hang out for a while.`);
}

function askYesOrNoQuestion(question, positiveResponse, negativeResponse) {
  let answer = prompt(question).toLowerCase();

  if (answer === 'yes') {
    alert(positiveResponse);
  } else if (answer === 'no') {
    alert(negativeResponse);
  } else {
    alert('Interesting answer!');
  }
}

askYesOrNoQuestion('Do you like vacations?', 'They are the best!', 'Why not?');
askYesOrNoQuestion('Do you like the color orange?', 'Its my favorite!', 'You probably like blue');
askYesOrNoQuestion('Is water wet?', 'Glad you are paying attention', 'hmmmm... not so sure about that one.');
askYesOrNoQuestion('Have you ever gotten poison ivy?', 'That must have sucked!', 'Same, we are so lucky');
askYesOrNoQuestion('Are you ready?', "LET'S GO!", 'You better get ready');

let correct = false;
for (let x = 1; x < 5; x++) {
  let favMovie = parseInt(prompt('How many times have I seen the Princess Bride?'));
  if (favMovie < 100) {
    alert('Too low.');
  } else if (favMovie > 100) {
    alert('Too high.');
  } else {
    alert('Inconceivable!');
    correct = true;
    break;
  }
}
if (!correct) {
  alert('So close! but the answer is 100');
}
const pastaShapes = ['farfelle', 'penne', 'rigatoni', 'tortellini', 'cavatappi'];

let favPasta = prompt('Do we like the same types of pasta?').toLowerCase();

let found = false;

for (let i = 0; i < pastaShapes.length; i++) {
  if (favPasta === pastaShapes[i]) {
    found = true;
    break;
  }
}

if (found) {
  alert('You know what they say about great minds...');
} else {
  alert('Guess not :(');
}


/*
const pastaShapes = ['farfelle', 'penne', 'rigatoni', 'tortellini', 'cavatappi'];

let favPasta = prompt('Do we like the same types of pasta?').toLowerCase();

if (pastaShapes.includes(favPasta)) {
  alert('You know what they say about great minds...');
} else {
  alert('Guess not :(');
}
*/