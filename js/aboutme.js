'use strict';

var attempts = 3;
var userPoints = 0;
// var attemptsExt = 0;

function promptQuiz() {
    question6();
}

function question6() {
    var question6Num = Number(prompt('How many places have I worked?'));
    var guessNum = 5;

    while (attempts > 0) {
        if (question6Num === guessNum) {

            alert('Correct!');
            attempts = 0;
            userPoints++;
            console.log(userPoints);
        }
        if (question6Num > guessNum) {
            question6Num = Number(prompt('Too high. Try again.'));
            attempts--;
        }
        if (question6Num < guessNum) {
            question6Num = Number(prompt('Too low. Try again.'));
            attempts--;
        }
    }
    if (attempts === 0 && guessNum !== 5) {
        alert('You ran out of attempts. The answer was ' + guessNum + '.');
    }
}

function question7() {
    var restaurants = ['La Vecina', 'Marquee', 'Pullmans', 'Farmers and Distillers', 'Crabcake Factory'];
    

}
