var getUserChoice = function (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('invalid choice');
    }
}

var getComputerChoice = function () {
   var randomNumber = Math.floor(Math.random() * 3);
 if (randomNumber === 0) {
    return 'rock';
} else if (randomNumber === 1) {
    return 'paper';
} else if (randomNumber === 2) {
    return 'scissors';
} else {
    console.log('error')
}
};



var determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The game was a tie!'
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer wins...'
        } 
        
        if (computerChoice === 'scissors') {
            return 'You have won!'
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer wins...'
        } 
        
        if (computerChoice === 'rock') {
            return 'You have won!'
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer wins...'
        } 
        
        if (computerChoice === 'paper') {
            return 'You have won!'
        }
    }
}

var userChoice = getUserChoice('PAPER');
var computerChoice = getComputerChoice();

console.log('Your choice: ' + userChoice);
console.log('Computers choice: ' + computerChoice);
console.log('Results: ' + determineWinner(userChoice, computerChoice));
