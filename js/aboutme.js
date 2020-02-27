'use strict';

var attempts = 3;
var userPoints = 0;
var attemptsExt = 0;

function promptQuiz() {
    question6();
    question7();
    alertScore();
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
    var restaurants = ['La Vecina', 'Marquee', 'Pullmans', 'Farmers and Distillers', 'Crabcake Factory', 'Clinton Street Social Club', 'Rapid Creek Cidery', 'Moniker 86 Social Club', 'Exotic India', 'Brix Wine Bar'];
    while (attemptsExt < 6) {
        var favRes = prompt('What is one of my favorite restaurants?');
        for (var i = 0; i < restaurants.length; i++) {
            console.log(i);
            if (favRes === restaurants[i]) {
                alert('You got the right answer.');
                attemptsExt = 6;
                userPoints++;
                console.log(userPoints);
                break;
            }
        }
        if (favRes !== restaurants[i]) {
            alert('Sorry guess again.');
            attemptsExt++;
        }
    }
    if (attemptsExt === 6 && favRes !== restaurants[i]) {
        alert('Sorry, you ran out of attempts.');
    }
}

function alertScore() {
    alert('Congratulations! You have ' + userPoints + ' points.');
}
