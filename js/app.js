'use strict';

function nameIs() {
  return prompt('Who are you?');
}

let HiIAm = nameIs();
console.log(`Hi ${HiIAm}`);

function greeting() { //eslint-disable-line
  document.write(`Welcome ${HiIAm}, stay and hang out for a while.`);
}

function askYesOrNoQuestion(question, positiveResponse, negativeResponse) {
  let answer = prompt(question).toLowerCase();

  if (answer === 'yes') {
    alert(positiveResponse);
    return true;
  } else if (answer === 'no') {
    alert(negativeResponse);
    return false;
  } else {
    alert('Interesting answer!');
    return false;
  }
}

let totalCorrect = 0;

if (askYesOrNoQuestion('Do you like vacations?', 'They are the best!', 'Why not?')); {totalCorrect++;
}
if (askYesOrNoQuestion('Do you like the color orange?', 'Its my favorite!', 'Darn, I thought you were cool.')); {totalCorrect++;
}
if (askYesOrNoQuestion('Is water wet?', 'Glad you are paying attention', 'hmmmm... not so sure about that one.')); {totalCorrect++;
}
if (askYesOrNoQuestion('Have you ever gotten poison ivy?', 'Same, we are so lucky', 'That must have sucked!')); {totalCorrect++;
}
if (askYesOrNoQuestion('Are you ready?', "LET'S GO!", 'You better get ready')); {totalCorrect++;
}

let correct = false;
for (let x = 1; x < 5; x++) {
  let favMovie = parseInt(prompt('How many times have I seen the Princess Bride?'));
  if (favMovie < 100) {
    alert('Too low.');
  } else if (favMovie > 100) {
    alert('Too high.');
  } else {
    alert('Inconceivable!');
    totalCorrect++;
    correct = true;
    break;
  }
}
if (!correct) {
  alert('So close! but the answer is 100');
}
const pastaShapes = ['farfelle', 'penne', 'rigatoni', 'tortellini', 'cavatappi'];

let favPasta = prompt('Lets see if we like the same types of pasta, what is your favorite kind?').toLowerCase();

let found = false;

for (let i = 0; i < pastaShapes.length; i++) {
  if (favPasta === pastaShapes[i]) {
    found = true;
    totalCorrect++;
    break;
  }
}

if (found) {
  alert('You know what they say about great minds...');
} else {
  alert('Thats not a favorite of mine. :(');
}

alert('Well done you got ' + totalCorrect + ' correct! Thanks for playing');


