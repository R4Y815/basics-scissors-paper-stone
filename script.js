var Code01 = "PROJECT PART 1: SCISSORS PAPER STONE: PART 1-STANDARD MODE";

// random number generator

/* var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger + 1;
};

// read random Number to output  random GameHand
var readGameHandNmbr = function (gameHandNmbr) {
  var gameHandPlayed = "";
  if (gameHandNmbr == 1) {
    gameHandPlayed = "scissors";
  }
  if (gameHandNmbr == 2) {
    gameHandPlayed = "paper";
  }
  if (gameHandNmbr == 3) {
    gameHandPlayed = "stone";
  }
  return gameHandPlayed;
};

var main = function (input) {
  var gameHandRandom = randomNumber();
  var gameHand = readGameHandNmbr(gameHandRandom);

  var draw = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> =It's a DRAW!=`;
  var lose = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> ~You LOSE~`;
  var win = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> ***You WIN!***`;
  var errorMessage = `xxxxxxxxx INPUT ERROR xxxxxxxxxx. <br><br> There are only 3 options: 'scissors', 'paper' or 'stone'.`;
  var endingMessage = `<br><br> To play the next game, please type 'scissors', 'paper' or 'stone'.`;

  var myOutputValue = errorMessage;

  var judgement = function (playerHand, computerHand) {
    if (playerHand == computerHand) {
      return "draw";
    }
    if (playerHand == "scissors" && computerHand == "stone") {
      return "lose";
    }
    if (playerHand == "scissors" && computerHand == "paper") {
      return "win";
    }
    if (playerHand == "paper" && computerHand == "scissors") {
      return "lose";
    }
    if (playerHand == "paper" && computerHand == "stone") {
      return "win";
    }
    if (playerHand == "stone" && computerHand == "paper") {
      return "lose";
    }
    if (playerHand == "stone" && computerHand == "scissors") {
      return "win";
    }
  };

  if (judgement(input, gameHand) == "draw") {
    myOutputValue = draw;
  }
  if (judgement(input, gameHand) == "lose") {
    myOutputValue = lose;
  }
  if (judgement(input, gameHand) == "win") {
    myOutputValue = win;
  }

  return myOutputValue + endingMessage;
}; */

//============================================================================================================================================================================

var Code02 = "PROJECT 1: SCISSORS PAPER STONE PART 1: REVERSED MODE";
/* 
var main = function (input) {
  var gameHand = readGameHandNmbr(randomNumber());
  var win = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> ***You WIN!***`;
  var lose = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> ~You LOSE~`;
  var draw = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> =It's a DRAW!=`;
  var errorMessage = `xxxxxxxxx INPUT ERROR xxxxxxxxxx. <br><br> There are only 3 options: 'scissors', 'paper' or 'stone'.`;
  var endingMessage = `<br><br> To play the next game, please type 'scissors', 'paper' or 'stone'. <br><br> '<i>If something doesn't look right, you could always look at its complement view.</i>`;

  var myOutputValue = errorMessage;

// Code Block for reversing
  if (input.toLowerCase() == "reversed scissors") {
    input = "paper";
  }
  if (input.toLowerCase() == "reversed paper") {
    input = "stone";
  }
  if (input.toLowerCase() == "reversed stone") {
    input = "scissors";
  }

//code Block for judging who wins
  if (
    (input.toLowerCase() == "scissors" && gameHand == "paper") ||
    (input.toLowerCase() == "paper" && gameHand == "stone") ||
    (input.toLowerCase() == "stone" && gameHand == "scissors")
  ) {
    myOutputValue = lose;
  }

  if (
    (input.toLowerCase() == "scissors" && gameHand == "stone") ||
    (input.toLowerCase() == "paper" && gameHand == "scissors") ||
    (input.toLowerCase() == "stone" && gameHand == "paper")
  ) {
    myOutputValue = win;
  }

  if (input.toLowerCase() == gameHand) {
    myOutputValue = draw;
  }

  return myOutputValue + endingMessage;
};

// random number generator

var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger + 1;
};

// read random Number to output  random GameHand
var readGameHandNmbr = function (gameHandNmbr) {
  var gameHandPlayed = "";
  if (gameHandNmbr == 1) {
    gameHandPlayed = "scissors";
  }
  if (gameHandNmbr == 2) {
    gameHandPlayed = "paper";
  }
  if (gameHandNmbr == 3) {
    gameHandPlayed = "stone";
  }
  return gameHandPlayed;
}; */

//============================================================================================================================================================================

var Code02 = "PROJECT 1: SCISSORS PAPER STONE;- PART 2 BASE- WIN-LOSE";
/* 
// read random Number and OutputString for Computer's Hand.
var genComputerHand = function (gameHandNmbr) {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var gameHandNmbr = randomInteger + 1;
  var gameHandPlayed = "";
  if (gameHandNmbr == 1) {
    gameHandPlayed = "scissors";
  }
  if (gameHandNmbr == 2) {
    gameHandPlayed = "paper";
  }
  if (gameHandNmbr == 3) {
    gameHandPlayed = "stone";
  }
  return gameHandPlayed;
};

var percentage = function (a, b) {
  var result = (a / b) * 100;
  return result;
};

var totalGamesPlayed = 0;
var nmbrOfWins = 0;
var nmbrOfLosses = 0;
var nmbrOfDraws = 0;

var main = function (input) {
  var gameHand = genComputerHand();

  var errorMessage = `xxxxxxxxx INPUT ERROR xxxxxxxxxx. <br><br> 
                    Please only input from the following:<br>
                     'scissors', 'paper' or 'stone'.`;

  var draw = `The computer chose ${gameHand.toUpperCase()}.
              <br><br>You chose ${input.toUpperCase()}.<br><br> =It's a DRAW!=`;

  var lose = `The computer chose ${gameHand.toUpperCase()}.
             <br><br>You chose ${input.toUpperCase()}.<br><br> ~You LOSE~`;

  var win = `The computer chose ${gameHand.toUpperCase()}.
             <br><br>You chose ${input.toUpperCase()}.<br><br> ***You WIN!***`;

  var myOutputValue = "";

  // code block for reversing
  /*   if (input.toLowerCase() == "reversed scissors") {
    input = "paper";
  }

  if (input.toLowerCase() == "reversed paper") {
    input = "stone";
  }

  if (input.toLowerCase() == "reversed stone") {
    input = "scissors";
  } */

//code Block for judging who wins
/* 
  if (Number.isNaN(Number(input)) == false) {
    myOutputValue = errorMessage;
  } 

  if (input.toLowerCase() == gameHand) {
    myOutputValue = draw;
    nmbrOfDraws = nmbrOfDraws + 1;
  } else if (
    (input.toLowerCase() == "scissors" && gameHand == "stone") ||
    (input.toLowerCase() == "paper" && gameHand == "scissors") ||
    (input.toLowerCase() == "stone" && gameHand == "paper")
  ) {
    myOutputValue = lose;
    nmbrOfLosses = nmbrOfLosses + 1;
  } else if (
    (input.toLowerCase() == "scissors" && gameHand == "paper") ||
    (input.toLowerCase() == "paper" && gameHand == "stone") ||
    (input.toLowerCase() == "stone" && gameHand == "scissors")
  ) {
    myOutputValue = win;
    nmbrOfWins = nmbrOfWins + 1;
  } else {
    myOutputValue = errorMessage;
  }

  var endingMessage = `<br><br> To play the next game, please type 'scissors', 'paper' or stone'`;

  var totalGamesPlayed = nmbrOfDraws + nmbrOfLosses + nmbrOfWins;

  var scoreDisplay = `<br><br> Wins-Losses <br>   ${nmbrOfWins} - ${nmbrOfLosses}<br>Number of ties(draw) = ${nmbrOfDraws}<br>Number of Games Played = ${totalGamesPlayed}<br> Win Percentage =${percentage(
    nmbrOfWins,
    totalGamesPlayed
  ).toFixed(1)}% . `;

  if (myOutputValue == errorMessage) {
    scoreDisplay = "<br>";
    endingMessage = "<br>";
  }

  return myOutputValue + scoreDisplay + endingMessage;
}; */

//============================================================================================================================================================================

var Code02 = "PROJECT 1: SCISSORS PAPER STONE;- PART 2 BASE- User Name Input";

// read random Number and OutputString for Computer's Hand.
var genComputerHand = function (gameHandNmbr) {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var gameHandNmbr = randomInteger + 1;
  var gameHandPlayed = "";
  if (gameHandNmbr == 1) {
    gameHandPlayed = "scissors";
  }
  if (gameHandNmbr == 2) {
    gameHandPlayed = "paper";
  }
  if (gameHandNmbr == 3) {
    gameHandPlayed = "stone";
  }
  return gameHandPlayed;
};

var percentage = function (a, b) {
  var result = (a / b) * 100;
  return result;
};

var currentMode = "waiting for username";
var userName = "";
var totalGamesPlayed = 0;
var nmbrOfWins = 0;
var nmbrOfLosses = 0;
var nmbrOfDraws = 0;
var endingMessage = `<br><br> To play the next game, please type 'scissors', 'paper' or stone'`;

var playJanKenPo = function (userName, userGuess) {
  var gameHand = genComputerHand();
  var errorMessage = `xxxxxxxxx INPUT ERROR xxxxxxxxxx. <br><br> 
                ${userName} please only input from the following:<br>
                  'scissors', 'paper' or 'stone'.`;

  var draw = `Computer chose ${gameHand.toUpperCase()}.
          <br><br>${userName} chose ${userGuess.toUpperCase()}.<br><br> =It's a DRAW!=`;

  var lose = `Computer chose ${gameHand.toUpperCase()}.
          <br><br>${userName} chose ${userGuess.toUpperCase()}.<br><br> ~${userName} LOSES~`;

  var win = `Computer chose ${gameHand.toUpperCase()}.
          <br><br>${userName} chose ${userGuess.toUpperCase()}.<br><br> ***${userName} WINS!***`;

  var messsageOutput = "";
  if (userGuess.toLowerCase() == gameHand) {
    messsageOutput = draw;
    nmbrOfDraws = nmbrOfDraws + 1;
  } else if (
    (userGuess.toLowerCase() == "scissors" && gameHand == "stone") ||
    (userGuess.toLowerCase() == "paper" && gameHand == "scissors") ||
    (userGuess.toLowerCase() == "stone" && gameHand == "paper")
  ) {
    messsageOutput = lose;
    nmbrOfLosses = nmbrOfLosses + 1;
  } else if (
    (userGuess.toLowerCase() == "scissors" && gameHand == "paper") ||
    (userGuess.toLowerCase() == "paper" && gameHand == "stone") ||
    (userGuess.toLowerCase() == "stone" && gameHand == "scissors")
  ) {
    messsageOutput = win;
    nmbrOfWins = nmbrOfWins + 1;
  } else {
    messsageOutput = errorMessage;
  }

  var totalGamesPlayed = nmbrOfDraws + nmbrOfLosses + nmbrOfWins;

  var scoreDisplay = `<br><br> Wins - Losses <br>___${nmbrOfWins} - ${nmbrOfLosses} ___<br>Number of ties(draw) = ${nmbrOfDraws}<br>Number of Games Played = ${totalGamesPlayed}<br> Win Percentage =${percentage(
    nmbrOfWins,
    totalGamesPlayed
  ).toFixed(1)}% . `;

  if (messsageOutput == errorMessage) {
    scoreDisplay = "<br>";
    endingMessage = "<br>";
  }

  return messsageOutput + scoreDisplay + endingMessage;
};

var main = function (input) {
  var myOutputValue = "";
  var welcomeMsg = `, welcome to the Normal Mode of Scissors, Paper, Stone. <br><br> Scissors > Paper > Stone and Stone > Scissors. <br><br> You get 1 point for every round won, no points are awarded for draws.`;
  if (currentMode == "waiting for username") {
    userName = input;
    currentMode = "JanKenPo";
    myOutputValue = "Hello " + userName + welcomeMsg + endingMessage;
  } else if (currentMode == "JanKenPo") {
    myOutputValue = playJanKenPo(userName, input);
  }

  return myOutputValue;
};
