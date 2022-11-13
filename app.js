
let buttons = document.querySelector('#buttons');
let feedback = document.querySelector('.feedback');
let playAgainBtn = document.querySelector('#again');







function random() {
    let buttons = document.querySelector('#buttons');
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let finalHand = [];
    if (randomNumber === 1) {
        finalHand.push('Rock');
    } 
    if (randomNumber === 2) {
        finalHand.push('Paper')
    }
    if (randomNumber === 3) {
        finalHand.push('Scissors')
    }
    return finalHand;
    
}

buttons.addEventListener('click', game);


let score = 0;
let computerScore = 0;
function game(event) {
    let buttons = document.querySelector('#buttons');
    let value = event.target.getAttribute('value');
    let feedback = document.querySelector('.feedback');
    let computerHand = random();



    if (value == computerHand) {
        console.log('Its a tie')
        document.querySelector(".feedback").innerHTML = 'Its a tie!';

    } 
    if (value == 'Rock' && computerHand == 'Paper') {
        computerScore++;
        console.log('You lost!')
        document.querySelector(".feedback").innerHTML = 'You lost!';
    }
    if (value == 'Rock' && computerHand == 'Scissors') {
        score++;
        console.log('You won!')
        document.querySelector(".feedback").innerHTML = 'You won!';

        
        
    }
    if (value == 'Paper' && computerHand == 'Rock') {
        score++;
        console.log('You won!')
        document.querySelector(".feedback").innerHTML = 'You won!';

    }
    if (value == 'Paper' && computerHand == 'Scissors') {
        computerScore++;
        console.log('You lost!')
        document.querySelector(".feedback").innerHTML = 'You lost!';

    }
    if (value == 'Scissors' && computerHand == 'Rock') {
        computerScore++;
        console.log('You lost!')
        document.querySelector(".feedback").innerHTML = 'You lost!';

    }
    if (value == 'Scissors' && computerHand == 'Paper') {
        score++;
        console.log('You won!')
        document.querySelector(".feedback").innerHTML = 'You won!';

    }
    document.querySelector(".own-hand").innerHTML = value;
    document.querySelector(".computer-hand").innerHTML = computerHand;
    document.querySelector("#score-player").innerHTML = 'Your score:             ' + score;
    document.querySelector("#score-computer").innerHTML = 'Computer score:             ' + computerScore;

}

playAgainBtn.addEventListener('click', playAgain);

function playAgain(){
    console.log("test")
    score = 0;
    computerScore = 0;
    document.querySelector("#score-player").innerHTML = 'Your score:             ' + 0;
    document.querySelector("#score-computer").innerHTML = 'Computer score:             ' + 0;
}




