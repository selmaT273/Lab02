'use strict';

var attempts = 3;
// var userPoints = 0;
// var attemptsExt = 0;
// var restaurants = ['La Vecina', 'Marquee', 'Pullmans', 'Farmers and Distillers', 'Crabcake Factory'];

function promptQuiz(){
    var question6Num = Number(prompt('How many places have I worked?'));
    var guessNum = 5;

    while (attempts > 0){
        if(question6Num === guessNum){

            alert('Correct!');
            attempts = 0;

        }
        if(question6Num > guessNum){
            question6Num = Number(prompt('Too high. Try again.'));
            attempts--;
        }
        if(question6Num < guessNum){
            question6Num = Number(prompt('Too low. Try again.'));
            attempts--;
        }
    }
    if(attempts === 0){
        alert('You ran out of attempts. The answer was ' + guessNum + '.');
    }
}