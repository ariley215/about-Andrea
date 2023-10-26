'use strict';

function nameIs() {
  const usersName = prompt('Who are you?');

  return usersName;
}

let HiIAm = nameIs();
console.log('HiIAm');

function greeting() {
  document.write('Welcome ' + HiIAm + ' stay and hang out for a while.');
}


function firstYoN() {
  let vacay = prompt('Do you like vacations?');
  vacay = vacay.toLowerCase();
  console.log(vacay);

  if (vacay === 'yes') {
    alert('They are the best!');
    //   console.log(vacay);
  }
  else if (vacay === 'no') {
    alert('Why not?');
    // console.log(vacay);
  }
  else {
    alert('Sounds like you need one');
    // console.log(vacay);

  }
}
firstYoN();


function secondYoN() {
  let color = prompt('Do you like the color orange?');
  color = color.toLowerCase();
  console.log(color);

  if (color === 'yes') {
    alert('Its my favorite!');
    //   console.log(color);
  }
  else if (color === 'no') {
    alert('You probably like blue');
    // console.log(color);
  }
  else {
    alert('I like that one too');
    // console.log(color);

  }
}
secondYoN();


function thirdYoN() {
  let water = prompt('Is water wet?');
  water = water.toLowerCase();
  console.log(water);

  if (water === 'yes') {
    alert('Glad you are paying attention');
    //   console.log(water);
  }
  else if (water === 'no') {
    alert('hmmmm... not so sure about that one.');
    // console.log(water);
  }
  else {
    alert('You must be thinking of something else');
    // console.log(water);

  }
}
thirdYoN();


function fourthYoN() {
  let poisonIvy = prompt('Have you ever gotten poison ivy?');
  poisonIvy = poisonIvy.toLowerCase();
  console.log(poisonIvy);

  if (poisonIvy === 'yes') {
    alert('That must have sucked!');
    //   console.log(poisonIvy);
  }
  else if (poisonIvy === 'no') {
    alert('Same, we are so lucky');
    // console.log(poisonIvy);
  }
  else {
    alert('Try again');
    // console.log(poisonIvy);

  }
}
fourthYoN();


function fifthYoN() {
  let ready = prompt('Are you ready?');
  ready = ready.toLowerCase();
  console.log(ready);

  if (ready === 'yes') {
    alert("LET'S GO!");
    //   console.log(ready);
  }
  else if (ready === 'no') {
    alert('You better get ready');
    // console.log(ready);
  }
  else {
    alert('Ready is not your middle name');
    // console.log(ready);

  }
}
fifthYoN();




for (let x = 1; x < 5; x++) {
  let favMovie = prompt('How many times have I seen the Princess Bride');
  favMovie = parseInt(favMovie);
  if (favMovie < 100)
    alert('Too low.');
  else if (favMovie > 100)
    alert('Too high.');
  else if (favMovie === 100)
    alert('Inconceivable!');
  else {
    alert('Try again');
  }

}
alert('So close! but the answer is 100');

const pastaShapes = [];
pastaShapes.push('farfelle', 'penne', 'rigatoni', 'tortellini', 'cavatappi');
console.log(pastaShapes);

let favPasta = prompt('Do we like the same types of pasta?');
favPasta = favPasta.toLowerCase();

let found = false;

for (let a = 0; a < pastaShapes.length; a++) {
  if (favPasta === pastaShapes[a]) {
    alert('You know what they say about great minds...');
    found = true;
    break;
  }

  if (!found) {
    alert('Guess not :(');

  
  }
}

// // function doAnything() {
// //   return "I will do this thing " + the Thing";

// }