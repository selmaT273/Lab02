'use strict';

var attempts = 3;
// var userPoints = 0;
// var attemptsExt = 0;
// var restaurants = ['La Vecina', 'Marquee', 'Pullmans', 'Farmers and Distillers', 'Crabcake Factory'];

// // function promptQuiz(){
var question6 = prompt('How many places have I worked?');
var question6Num = Number(question6);

while (attempts > 0){

    var guessNum = 5;

    if(question6Num === guessNum){

        alert('Correct!');
        attempts = 0;

    }
    if(question6Num > guessNum){
        question6Num = prompt('Too high. Try again.');
        attempts--;
    }
    if(question6Num < guessNum){
        question6Num = prompt('Too low. Try again.');
        attempts--;
    }
}  
    

        
        



