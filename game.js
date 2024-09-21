function hChoice() {
    return prompt("Enter your choice");
  }

  function cChoice() {
    let randomNumber = parseInt(Math.random() * 3);
    const choices = ["rock", "paper", "scissor"];
    return choices[randomNumber];
  }

  //
  let hScore = 0;
  let CScore = 0;

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

  for (let index = 0; index < 5; index++) {
    let human = hChoice();
    let computer = cChoice();
    // let hChoice = prompt("Enter Your Choice");
    gameLogic(human, computer);
  }

  if (hScore > CScore) {
    console.log(`you won ${hScore}/5`);
  } else if (hScore === CScore) {
    console.log(`draw ${hScore}/5 ${CScore}/5`);
  } else {
    console.log("YOU LOSE TT");
  }