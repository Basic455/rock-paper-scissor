//get computer choice
function getComputerChoice() {
    let randomNumber = parseInt(Math.random()*3 + 1)
    if (randomNumber === 1){
        return 'rock'
    } else if (randomNumber === 2){
        return 'paper'
    } else {
        return 'scissor'
    }
}

//get user choice
function getHumanChoice() {
    let choice = prompt('Enter your choice: rock, paper or scissor')
    choice = choice.trim().toLowerCase()
    return choice
}


//compare
let humanScore = 0;
let computerScore = 0;

//game logic
function playRound(player, computer){
    if (player == 'rock'){
        if (computer == 'paper'){
            return computerScore++;
        } else {
            console.log('You Win')
            return humanScore++;
        }
    } else if (player == 'paper'){
        if(computer == 'scissor'){

            return computerScore++;
        } else {
            return humanScore++;
        }
    } else if (player == "scissor"){
        if (computer == 'rock'){
            return computerScore++;
        } else {

            return humanScore++;
        }
    }

}


function playGame() {
    for(let i = 0; i <= 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore){
        console.log(`you won. your score was ${humanScore}`)
    }
    else {
        console.log(`you lost. your score was ${humanScore}`)
    }
}

playGame()