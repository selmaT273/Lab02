'use strict';

var userPoints = 0;

// window.addEventListener('load', (event) => {
function greeting(){
var name = prompt('Hello there! What is your name?');
  alert('Nice to meet you, ' + name + '! This page should help you get to know a little more about me. When you are done reading, feel free to take the quiz at the bottom of the page.');

}


function promptMe(){
  question1prompt();
  question2prompt();
  question3prompt();
  question4prompt();
  question5prompt();
  alertScore();
}

function question1prompt(){
  var question1 = prompt('Do I have 4 children?').toLowerCase();
  while (question1 !== 'no') {
    question1 = prompt('Try again. Do I have 4 children?').toLowerCase();
  } 
  userPoints++;
  console.log(userPoints);
}

function question2prompt(){
  var question2 = prompt('Correct! Next question... Did I move to Cedar Rapids in 2011?').toLowerCase();
  while (question2 !== 'yes') {
    question2 = prompt('Try again. Did I move to Cedar Rapids in 2011?').toLowerCase();
  }
  userPoints++;
}

function question3prompt(){
  var question3 = prompt('You are rocking this quiz! Next up, did I receive my degree in Economics?').toLowerCase();
  while (question3 !== 'no') {
    question3 = prompt('Try again. Did I receive my degree in Economics?').toLowerCase();
  }
  userPoints++;
}

function question4prompt(){
  var question4 = prompt('You got another one right! Did I work as a sign language interpreter after graduating college?').toLowerCase();
  while (question4 !== 'yes') {
    question4 = prompt('Try again. Did I work as a sign language interpreter after graduating college?').toLowerCase();
  }
  userPoints++;
}

function question5prompt(){
  var question5 = prompt('Last one! Is one of my favorite shows The Office?').toLowerCase();
  while (question5 !== 'yes') {
    question5 = prompt('Try again. Is one of my favorite shows The Office?').toLowerCase();
  }
  userPoints++;
}

function alertScore() {
  alert('Congratulations! You got ' + userPoints + ' points on this quiz.');


}





greeting();

// });

// the tolowercase in the prompt for incorrect answers doesnt work //
