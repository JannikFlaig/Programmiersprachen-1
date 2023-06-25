let screenwidth = window.innerWidth;
let vissibleScoreItems = 5;
if (screenwidth < 800 && screenwidth > 400) {
  vissibleScoreItems = 4;
  console.log("< 800");
} else if (screenwidth < 400) {
  vissibleScoreItems = 3;
  console.log("< 400");
}

let clickCounter = 0;
let CardData = [];
let highScoreS1 = [{ name: "S1", score: 0, time: "00:00" }];
let highScoreS2 = [{ name: "S2", score: 0, time: "00:00" }];
let highScoreS3 = [{ name: "S3", score: 0, time: "00:00" }];
let highScoreS4 = [{ name: "S4", score: 0, time: "00:00" }];
let highScoreM1 = [{ name: "M1", score: 0, time: "00:00" }];
let highScoreM2 = [{ name: "M2", score: 0, time: "00:00" }];
let highScoreM3 = [{ name: "M3", score: 0, time: "00:00" }];
let highScoreM4 = [{ name: "M4", score: 0, time: "00:00" }];
let dataSet = [];
let mute = true;
//multiplayer-mode
let players = [];
let currentPlayer = 1;

let startTime,
  endTime = 0;

let amountPlayer;

let mediaKey = 1;

function multiplayer() {
  for (let i = 1; i <= amountPlayer; i++) {
    players.push({
      players: i,
      score: 0,
    });
    score = document.createElement("div");
    score.id = "p" + i;
    score.classList.add("scoreItem");
    score.classList.add("deleteScore");
    text = document.createTextNode("Player" + i + ":" + 0);
    score.appendChild(text);
    scorebox = document.getElementById("score");
    scorebox.appendChild(score);
  }
  document.getElementById("p" + currentPlayer).style.color = "red";
  console.table(players);
  if (players.length > vissibleScoreItems) {
    let items = document.getElementsByClassName("scoreItem");
    for (let i = 0; i < items.length; i++) {
      if (i < vissibleScoreItems) {
        items[i].classList.remove("visible");
      } else {
        items[i].classList.add("visible");
      }
    }
  }
}

async function gameStart() {
  document.getElementById("timer").textContent = "00:00";
  let selectedCard = document.querySelector(".selected");
  if (selectedCard !== null) {
    selectedCard.classList.remove("selected");
  }
  document.getElementById("gameSetting").style.visibility = "visible";
  console.log("game start");

  const buttons = document.querySelectorAll(".difficulty");
  buttons.forEach((buttons) => {
    buttons.addEventListener("click", (event) => {
      let selectedCard = document.querySelector(".selected");
      if (selectedCard !== null) {
        selectedCard.classList.remove("selected");
      }
      amountOfCards = event.target.id;
      event.target.classList.add("selected");

      if (amountOfCards == 30) {
        document.getElementById("mainBoard").style.maxWidth = "570px";
        mediaKey = 1;
      } else if (amountOfCards == 40) {
        document.getElementById("mainBoard").style.maxWidth = "730px";
        mediaKey = 2;
      } else if (amountOfCards == 50) {
        document.getElementById("mainBoard").style.maxWidth = "900px";
        mediaKey = 3;
      } else if (amountOfCards == 70) {
        document.getElementById("mainBoard").style.maxWidth = "1200px";
        mediaKey = 4;
      }
    });
  });

  await new Promise((resolve) => {
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", () => {
      resolve();
    });
  }); // warten bis submit gedrückt
  amountPlayer = document.getElementById("input").value; //Wert auslesen
  createCards(amountOfCards);
  document.getElementById("gameSetting").style.visibility = "hidden";
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
  if (mute === false) {
    if (dataSet.length === 30) {
      document.getElementById("cardDeal1").play();
    } else if (dataSet.length === 40) {
      document.getElementById("cardDeal2").play();
    } else if (dataSet.length === 50) {
      document.getElementById("cardDeal3").play();
    } else if (dataSet.length === 70) {
      document.getElementById("cardDeal4").play();
    }
  }
  for (let i = 0; i < amountOfCards; i++) {
    setTimeout(() => {
      //creating the correct amount of playing cards, based on the entered difficulty(amountOfCards)
      cardsParent = document.createElement("div");
      cardsParent.classList.add(`card-parent${mediaKey}`);
      cardsParent.id = "parent" + dataSet[i].parentID;

      card = document.createElement("div");
      card.data = dataSet[i].data;
      card.id = "child" + dataSet[i].childID;

      card.style.backgroundImage = `url(./Images/${dataSet[i].data}.svg)`;

      card.classList.add(`card${mediaKey}`);
      card.classList.add("back-img");
      text = document.createTextNode(dataSet[i].text);

      // if(amountOfCards == 10) {
      card.appendChild(text);
      // }

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
          // Hier kommt der Code, der nach der Wartezeit von 2 Sekunden ausgeführt werden soll
        }, 700);
      }
    }, 60 * i); //speed for the animation
  }
  // setTimeout( () => {
  //   document.getElementById("mainBoard").style.justifyContent = "center";
  // },5000);
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
  if (mute === false) {
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
      if (mute === false) {
        document.getElementById("cardMatch").play();
      }
      // Karten passen zusammen
      console.log("pair");
      // Zug und Score für den aktuellen Spieler aktualisieren
      players[currentPlayer - 1].score++;
      outputScore.innerHTML =
        "Player" + currentPlayer + ":" + " " + players[currentPlayer - 1].score;
      startAnimate();
    } else {
      console.log("no pair");
      // Karten passen nicht zusammen
      outputScore.style.color = "black";
      let turnedCard = document.querySelectorAll(".back");
      turnedCard.forEach(function (card) {
        if (!card.classList.contains("solved")) {
          card.classList.remove("back");
          card.classList.add("back-img");
        }
      });
      nextItems();
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
  if (mute === false) {
    mute = true;
    document.getElementById("mute").style.backgroundImage =
      'url("./Images/mute.svg")'; //default speaker
  } else {
    mute = false;
    document.getElementById("mute").style.backgroundImage =
      'url("./Images/Speaker.png")'; //crossed out speaker
  }
  console.log(mute);
}

function startAnimate() {
  let destination = document
    .getElementById("p" + currentPlayer)
    .getBoundingClientRect();

  let child = document.querySelectorAll(".back");

  child.forEach((child) => {
    if (!child.classList.contains("solved")) {
      child.classList.add("solved");
      let rect = child.getBoundingClientRect();
      let moveInX = destination.x - rect.left;
      let moveInY = destination.y - rect.top;

      child.style.cssText += `transform: translateX(${moveInX}px) translateY(${moveInY}px) scale(0.5);`;

      setTimeout(() => {
        child.parentNode.removeChild(child);
        child.style.transform = "";
        child.style.transform = "translateX(-20%) translatey(25%) scale(0.5)";
        document.getElementById(`p${currentPlayer}`).appendChild(child);
        child.style.position = "absolute";
      }, 180);
    }
  });
  checkGameEnd();
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

let finalTime;
let stuff;

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
}

function endTimer() {
  endTime = Date.now();
  if (startTime !== undefined) {
    clearInterval(timerInterval);
  }
  finalTime = endTime - startTime;
  let minutes = Math.floor(finalTime / 60000);
  let seconds = Math.floor((finalTime % 60000) / 1000);
  stuff = pad(minutes) + ":" + pad(seconds);
  console.log(stuff);
  startTime = undefined;
}

function updateTimer() {
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

async function gameEnd() {
  document.getElementById("placeholder1").innerHTML = currentPlayer;
  document.getElementById("askName").style.visibility = "visible";
  console.log("game end");
  await new Promise((resolve) => {
    let button = document.getElementById("continue");
    button.addEventListener("click", () => {
      resolve();
    });
  });
  let name = document.getElementById("winnerName").value;
  let winscreen = document.getElementById("winscreen");
  document.getElementById("Winner").innerHTML = name;
  document.getElementById("winnerScore").innerHTML = Math.max(
    ...players.map((player) => player.score)
  );
  document.getElementById("winnerTime").innerHTML = stuff;
  winscreen.style.visibility = "visible";
  let scoreBoard = document.getElementById("scoreBoard");
  scoreBoard.style.top = "50%";
  scoreBoard.style.left = "50%";
  scoreBoard.style.transform = "translate(-50%, -50%)";
  updateHighscore(name);
  showScoreList();
}

let selectedArray = selectArray();
function updateHighscore(winnerName) {
  let maxScore = Math.max(...players.map((player) => player.score));
  let maxScoreIndex = players.map((player) => player.score).indexOf(maxScore);
  let winner = players[maxScoreIndex].players;

  selectedArray = selectArray();

  let name = winnerName;
  console.log("name:", name);
  if (name !== null) {
    if (selectedArray.length < 50) {
      selectedArray.push({
        name: name,
        score: maxScore,
        time: stuff,
      });
    } else {
      let lowestScoreIndex = 0;
      let lowestScore = selectedArray[0].score;

      for (let i = 0; i < selectedArray.lenggth; i++) {
        // Compare if the current value is less than the previous value.
        if (selectedArray[i].score < lowestScore) {
          lowestScoreIndex = i;
          lowestScore = selectedArray[i].score;
        }
      }
      if (maxScore > lowestScore) {
        selectedArray[lowestScoreIndex] = {
          name: name,
          score: maxScore,
          time: stuff,
        };
      }
    }
  }
  if (players.length === 1) {
    selectedArray.sort((a, b) => {
      if (a.time < b.time) {
        return -1;
      } else if (a.time > b.time) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    selectedArray.sort((a, b) => {
      return b.score - a.score;
    });
  }
}

//Vielleicht das der Spieler aussuchen kann auf welches board er möchte idk

let scoreVisibillity = false;
function showScoreList() {
  selectedArray = selectArray();

  if (scoreVisibillity === false) {
    let table = document.createElement("table");
    table.classList.add("highscores-table");

    let headerRow = document.createElement("tr");
    headerRow.className = "header-row";

    let placeHeader = document.createElement("th");
    placeHeader.className = "header-cell";
    placeHeader.appendChild(document.createTextNode("Place"));
    headerRow.appendChild(placeHeader);

    let nameHeader = document.createElement("th");
    nameHeader.className = "header-cell";
    nameHeader.appendChild(document.createTextNode("Name"));
    headerRow.appendChild(nameHeader);

    let scoreHeader = document.createElement("th");
    scoreHeader.className = "header-cell";
    scoreHeader.appendChild(document.createTextNode("Score"));
    headerRow.appendChild(scoreHeader);

    let timeHeader = document.createElement("th");
    timeHeader.className = "header-cell";
    timeHeader.appendChild(document.createTextNode("Time"));
    headerRow.appendChild(timeHeader);

    table.appendChild(headerRow);

    for (let i = 0; i < selectedArray.length && i < 10; i++) {
      let row = document.createElement("tr");
      row.className = "rows";

      let placeCell = document.createElement("td");
      placeCell.className = "cell";
      placeCell.appendChild(document.createTextNode(i + 1 + "."));
      row.appendChild(placeCell);

      let nameCell = document.createElement("td");
      nameCell.className = "cell";
      nameCell.appendChild(document.createTextNode(selectedArray[i].name));
      row.appendChild(nameCell);

      let scoreCell = document.createElement("td");
      scoreCell.className = "cell";
      scoreCell.appendChild(document.createTextNode(selectedArray[i].score));
      row.appendChild(scoreCell);

      let timeCell = document.createElement("td");
      timeCell.className = "cell";
      timeCell.appendChild(document.createTextNode(selectedArray[i].time));
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

function selectArray() {
  let scoreAtribute1, scoreAtribute2;
  if (players.length > 1) {
    scoreAtribute1 = "M";
  } else {
    scoreAtribute1 = "S";
  }
  if (dataSet.length === 30) {
    scoreAtribute2 = 1;
  } else if (dataSet.length === 40) {
    scoreAtribute2 = 2;
  } else if (dataSet.length === 50) {
    scoreAtribute2 = 3;
  } else if (dataSet.length === 70) {
    scoreAtribute2 = 4;
  } else {
    scoreAtribute2 = 1;
  }
  const arrays = {
    S1: highScoreS1,
    S2: highScoreS2,
    S3: highScoreS3,
    S4: highScoreS4,
    M1: highScoreM1,
    M2: highScoreM2,
    M3: highScoreM3,
    M4: highScoreM4,
  };

  const key = `${scoreAtribute1}${scoreAtribute2}`;
  return arrays[key];
}

function nextItems() {
  let container = document.getElementById("score");
  let items = document.getElementsByClassName("scoreItem");
  console.log(items);
  let firstItem = items[0];
  let itemWidth = firstItem.offsetWidth + "10px";
  // Animationseffekt: Verschiebung nach links
  container.style.transform = `translateX(-${itemWidth}px)`;

  // Aktualisierung der Elemente in der Liste
  setTimeout(function () {
    container.removeChild(firstItem);
    container.appendChild(firstItem);
    // container.style.transform = 'translateX(0)';
    // Aktualisierung der Sichtbarkeit der Elemente
    for (let i = 0; i < items.length; i++) {
      if (i < vissibleScoreItems) {
        items[i].classList.remove("visible");
      } else {
        items[i].classList.add("visible");
      }
    }
  }, 0); // Wartezeit für die Animation in Millisekunden
}

window.addEventListener("resize", () => {
  screenwidth = window.innerWidth;
  if (screenwidth < 800 && screenwidth > 400) {
    vissibleScoreItems = 4;
    console.log("< 800");
  } else if (screenwidth < 400) {
    vissibleScoreItems = 3;
    console.log("< 400");
  } else {
    vissibleScoreItems = 5;
  }
  let items = document.getElementsByClassName("scoreItem");
  for (let i = 0; i < items.length; i++) {
    if (i < vissibleScoreItems) {
      items[i].classList.remove("visible");
    } else {
      items[i].classList.add("visible");
    }
  }
});

function restart() {
  //reset all global variables/arrays
  clickCounter = 0;
  CardID = [];
  players = [];
  dataSet = [];
  currentPlayer = 1;
  console.table(dataSet);
  //deleting all cards and the scores
  let cards = document.querySelectorAll(
    `.card${mediaKey},.card-parent${mediaKey}`
  );
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
    timer.textContent = "00:00";
  }

  document.getElementById("winnerName").value = "";
  document.getElementById("input").value = "";

  document.getElementById("askName").style.visibility = "hidden";
  document.getElementById("winscreen").style.visibility = "hidden";
  let scoreBoard = document.getElementById("scoreBoard");
  while (scoreBoard.firstChild) {
    scoreBoard.removeChild(scoreBoard.firstChild);
  }
  scoreVisibillity = false;
  scoreBoard.style.top = "4.5%";
  scoreBoard.style.left = "70%";
  scoreBoard.style.transform = "translate(-0%, -0%)";
  gameStart();
}
