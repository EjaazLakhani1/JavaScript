'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
*/

let targetNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message => {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    targetNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('Please enter a number');
    } else if (guess !== targetNumber) {
        if (score >= 0) {
            displayMessage(guess < targetNumber ? 'Too Low' : 'Too High');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lose');
        }
    } else if (guess === targetNumber) {
        displayMessage('BINGO');
        document.querySelector('.number').textContent = targetNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            document.querySelector('.highscore').textContent = score;
        }
    }
});
