let clickCounter = 0;
let CardData = [];
let highScore = [
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  // {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},
  {name: "Jannik", score: 2, time:"00:56"},


];
let dataSet = [];
let mute = false;
//multiplayer-mode
let players = [];
let currentPlayer = 1;

let startTime,
  endTime = 0;

let amountPlayer;

function submitPLayer() {
  amountPlayer = document.getElementById("input").value;
  console.log(amountPlayer);
  if (amountPlayer != "") {
    document.getElementById("inputbox").style.display = "none";
    buttons = document.querySelectorAll(".difficulty");
    buttons.forEach(function (buttons) {
      buttons.style.display = "block";
    });
  }
}

function multiplayer() {
  for (let i = 1; i <= amountPlayer; i++) {
      players.push({
        players: i,
        score: 0,
      });
      score = document.createElement("div");
      score.id = "p" + i;
      score.classList.add("deleteScore");
      text = document.createTextNode("Player" + i);
      score.appendChild(text);
      scorebox = document.getElementById("score");
      scorebox.appendChild(score);
  }
  document.getElementById("p" + currentPlayer).style.color = "red";
  console.table(players);
}

function checkDifficulty(event) {
  let amountOfCards = event.target.id;
  // let amountOfCards = 6;
  document.getElementById("mainBoard").style.gridTemplateColumns = `repeat(${
    amountOfCards / 5
  }, 20px)`;

  let buttons = document.querySelectorAll(".difficulty");
  buttons.forEach(function (buttons) {
    buttons.style.display = "none";
  });
  createCards(amountOfCards);
}

function createCards(amountOfCards) {
  let counter = 0;
  let dataVar = 1;
  let childID = 0;
  let parentID = 0;
  for (let i = 1; i <= amountOfCards; i++) {
    if (counter == 2) {
      dataVar++;
      counter = 0;
    }
    dataSet.push({
      data: dataVar,
      text: dataVar,
      childID: childID,
      parentID: parentID,
    });
    counter++;
    childID++;
    parentID++;
  }
  
  shuffleData(dataSet);
  console.table(dataSet);
  document.getElementById("cardDeal").play();
  for (let i = 0; i < amountOfCards; i++) {
    setTimeout(() => {
      //creating the correct amount of playing cards, based on the entered difficulty(amountOfCards)
      cardsParent = document.createElement("div");
      cardsParent.classList.add("card");
      cardsParent.id = "parent" + dataSet[i].parentID;

      card = document.createElement("div");
      card.data = dataSet[i].data;
      card.id = "child" + dataSet[i].childID;

      card.style.backgroundImage = `url(./Images/${dataSet[i].data}.svg)`;

      card.classList.add("card");
      card.classList.add("back-img");
      text = document.createTextNode(dataSet[i].text);

      card.appendChild(text);

      card.addEventListener("click", function () {
        cardClicked(event);
      });

      cardsParent.appendChild(card);
      document.getElementById("mainBoard").appendChild(cardsParent);

      let startPos = document.getElementById("start").getBoundingClientRect();
      let endPos = document
        .getElementById("parent" + dataSet[i].parentID)
        .getBoundingClientRect();
      let child = document.getElementById("child" + dataSet[i].childID);

      child.style.top = startPos.top - endPos.top + "px"; // Ändere die Berechnung der top-Position
      child.style.left = startPos.left - endPos.left + "px"; // Ändere die Berechnung der left-Position

      setTimeout(() => {
        child.style.top = "0";
        child.style.left = "0";
      }, 20);
      if (i === amountOfCards - 1) {
        setTimeout(() => {
          multiplayer();
          document.getElementById("restart").style.display = "block";
          // Hier kommt der Code, der nach der Wartezeit von 2 Sekunden ausgeführt werden soll
        }, 700);
      }
    }, 60 * i); //speed for the animation
  }
}

function shuffleData(arr) {
  //shuffles the data and content of the cards
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function cardClicked(event) {
  clickedCard = event.target;
  console.log("clickedCard.id:", clickedCard.id);

  if (clickCounter < 2 && !clickedCard.classList.contains("back")) {
    clickedCard.classList.add("back", "flip");
    clickedCard.classList.remove("back-img");

    let cardID = clickedCard.data;
    console.log("Card-data:", cardID);
    CardData.push(cardID);
    clickCounter++;
  }
  if (clickCounter === 2) {
    checkPair();
  }
  if (!startTime) {
    startTimer();
  }
  if(mute === false) {
    document.getElementById("flipCard").play();
  }
}

let tempcount = 0;

function checkPair() {
  let data1 = CardData[0];
  let data2 = CardData[1];
  console.table(CardData);
  console.log(currentPlayer);

  let outputScore = document.getElementById("p" + currentPlayer);

  setTimeout(function () {
    if (data1 === data2) {
      document.getElementById("cardMatch").play();
      // Karten passen zusammen
      console.log("pair");
      // Zug und Score für den aktuellen Spieler aktualisieren
      players[currentPlayer - 1].score++;
      outputScore.innerHTML = players[currentPlayer - 1].score;

      getDestination();
    } else {
      console.log("no pair");
      // Karten passen nicht zusammen
      outputScore.style.color = "white";
      let turnedCard = document.querySelectorAll(".back");

      turnedCard.forEach(function (card) {
        if (!card.classList.contains("solved")) {
          card.classList.remove("back");
          card.classList.add("back-img");
        }
      });
      // Den nächsten Spieler auswählen
      currentPlayer = (currentPlayer % players.length) + 1;
      document.getElementById("p" + currentPlayer).style.color = "red";
    }

    console.table(players);
    CardData = [];
    clickCounter = 0;
  }, 1000);
}

function sound() {
if(mute === false){
  mute = true;
  document.getElementById("mute").style.backgroundImage = ""//crossed out speaker
} else {
  mute = false;
  document.getElementById("mute").style.backgroundImage = ""//default speaker
}
 console.log(mute); 
}



function getDestination() {
  let placeholderForVarName2 = document
    .getElementById("p" + currentPlayer)
    .getBoundingClientRect();
  destination = {
    x: placeholderForVarName2.left,
    y: placeholderForVarName2.top,
  };
  startAnimate(destination);
}
function startAnimate(destination) {
  let child = document.querySelectorAll(".back");

  child.forEach((child) => {
    if (!child.classList.contains("solved")) {
      child.classList.add("solved");
      let rect = child.getBoundingClientRect();
      let moveInX = destination.x - rect.left;
      let moveInY = destination.y - rect.top;

      child.style.cssText += `transform: translateX(${moveInX}px) translateY(${moveInY}px) scale(0.5);`;

    }
  });
  // setTimeout(()=>{reset(child)}, 2000);
  checkGameEnd();
}
function reset(child) {
  child.forEach((child) => {
    child.style.transition = "0s";
  });
}

let finalTime;
let stuff;

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
}

function endTimer() {
  endTime = Date.now();
  clearInterval(timerInterval);
  finalTime = endTime - startTime;
  let minutes = Math.floor(finalTime / 60000);
  let seconds = Math.floor((finalTime % 60000) / 1000);
  stuff = pad(minutes) + ":" + pad(seconds);
  console.log(stuff);
  startTime = undefined;
}

function updateTimer() {
  document.getElementById("timer").style.display = "block";
  let currentTime = Date.now();
  let semiFinalTime = currentTime - startTime;
  let minutes = Math.floor(semiFinalTime / 60000);
  let seconds = Math.floor((semiFinalTime % 60000) / 1000);

  let timerOutput = document.getElementById("timer");
  timerOutput.innerHTML = pad(minutes) + ":" + pad(seconds);
}

function pad(num) {
  return num.toString().padStart(2, "0");
}

function checkGameEnd() {
  let totalScore = 0;
  for (let i = 0; i < players.length; i++) {
    totalScore += players[i].score;
  }
  if (totalScore === dataSet.length / 2) {
    endTimer();
    gameEnd();
  }
}

function gameEnd() {
  //display win screen
  updateHighscore();
}

function updateHighscore() {
  let maxScore = Math.max(...players.map((player) => player.score));
  let maxScoreIndex = players.map((player) => player.score).indexOf(maxScore);
  let winner = players[maxScoreIndex].players;
  let name = prompt("Enter the name for Player " + winner + ":");
  console.log("name:",name);
  if(name !== null) {
  if (highScore.length < 50) {
    highScore.push({
      name: name,
      score: maxScore,
      time: stuff,
    });
  } else {
    let lowestScoreIndex = 0;
    let lowestScore = highScore[0].score;

    for (let i = 0; i < highScore.lenggth; i++) {
      // Compare if the current value is less than the previous value.
      if (highScore[i].score < lowestScore) {
        lowestScoreIndex = i;
        lowestScore = highScore[i].score;
      }
    }
    if (maxScore > lowestScore) {
      highScore[lowestScoreIndex] = {
        name: name,
        score: maxScore,
        time: stuff,
      };
    }
  }
  }
  if(players.length == 1) {
  highScore.sort((a, b) => {
      if (a.time < b.time) {
        return -1;
      } else if (a.time > b.time) {
        return 1;
      } else {
        return 0;
      }
    });
   } else {
  highScore.sort((a, b) => {
    return b.score - a.score;
  });
  }
  console.table(highScore);
}

//Vielleicht das der Spieler aussuchen kann auf welches board er möchte idk

let scoreVisibillity = false;
function showScoreList() {
  if (scoreVisibillity === false) {
    let table = document.createElement("table");
    table.classList.add("highscores-table");
    for (let i = 0; i < highScore.length && i < 10 ; i++) {
      let row = document.createElement("tr");

      let placeCell = document.createElement("td");
      placeCell.appendChild(document.createTextNode(i + 1 + "."));
      row.appendChild(placeCell);

      let nameCell = document.createElement("td");
      nameCell.appendChild(document.createTextNode(highScore[i].name));
      row.appendChild(nameCell);

      let scoreCell = document.createElement("td");
      scoreCell.appendChild(document.createTextNode(highScore[i].score));
      row.appendChild(scoreCell);

      let timeCell = document.createElement("td");
      timeCell.appendChild(document.createTextNode(highScore[i].time));
      row.appendChild(timeCell);

      table.appendChild(row);
      scoreVisibillity = true;
    }

    document.getElementById("scoreBoard").appendChild(table);
  } else {
    let scoreBoard = document.getElementById("scoreBoard");
    while (scoreBoard.firstChild) {
      scoreBoard.removeChild(scoreBoard.firstChild);
    }
    scoreVisibillity = false;
  }
}

function restart() {
  //reset all global variables/arrays
  clickCounter = 0;
  CardID = [];
  players = [];
  dataSet = [];
  currentPlayer = 1;
  console.table(dataSet);
  //deleting all cards and the scores
  let cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    card.parentNode.removeChild(card);
  });
  let score = document.querySelectorAll(".deleteScore");
  score.forEach(function (score) {
    score.parentNode.removeChild(score);
  });

  let timer = document.getElementById("timer");
  if (timer.innerHTML != undefined) {
    endTimer();
    timer.style.display = "none";
  }

  document.getElementById("inputbox").style.display = "flex";
  document.getElementById("input").value = "";

  document.getElementById("restart").style.display = "none";
  document.getElementById("inputbox").style.display = "flex";
  console.log("restart");
}

//mit js die beste größe der karten berechnen
//für grid: Am anfang eine maximalbreite für das Game-board festlegen
