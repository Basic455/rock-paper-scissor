const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorButton = document.querySelector(".scissor")
const result = document.querySelector(".result")

let hScore = 0;
let CScore = 0;

function cChoice() {
  let randomNumber = parseInt(Math.random() * 3);
  const choices = ["rock", "paper", "scissor"];
  return choices[randomNumber];
}

function gameLogic(human, computer) {
  if (human === computer) {
  } else if (human === "rock") {
    if (computer === "paper") {
      CScore++;
    } else {
      hScore++;
    }
  } else if (human === "paper") {
    if (computer === "scissor") {
      CScore++;
    } else {
      hScore++;
    }
  } else if (human === "scissor") {
    if (computer === "rock") {
      CScore++;
    } else {
      hScore++;
    }
  }
}


rockButton.addEventListener('click', function(e){
   const hChoice = e.target.value
   console.log(hChoice)
   gameLogic(hChoice, cChoice())
   if (hScore > CScore) {
    result.textContent = `you won computer picked ${cChoice()} and your score is ${hScore}`;
  } else if (hScore === CScore) {
    result.textContent = `draw computer picked ${cChoice()} and your score is ${hScore}`;
  } else {
    result.textContent = `YOU LOSE TT computer picked ${cChoice()} and your score is ${hScore}`;
  }

});

paperButton.addEventListener('click', function(e){
  const hChoice = e.target.value
  console.log(hChoice)
  gameLogic(hChoice, cChoice())
  if (hScore > CScore) {
   result.textContent = `you won computer picked ${cChoice()} and your score is ${hScore}`;
 } else if (hScore === CScore) {
   result.textContent = `draw computer picked ${cChoice()} and your score is ${hScore}`;
 } else {
   result.textContent = `YOU LOSE TT computer picked ${cChoice()} and your score is ${hScore}`;
 }

});

scissorButton.addEventListener('click', function(e){
  const hChoice = e.target.value
  console.log(hChoice)
  gameLogic(hChoice, cChoice())
  if (hScore > CScore) {
   result.textContent = `you won computer picked ${cChoice()} and your score is ${hScore}`;
 } else if (hScore === CScore) {
   result.textContent = `draw computer picked ${cChoice()} and your score is ${hScore}` ;
 } else {
   result.textContent = `YOU LOSE TT computer picked ${cChoice()} and your score is ${hScore}`;
 }

});

