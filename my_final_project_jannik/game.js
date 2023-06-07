//let player select difficulty(depending on that creat the correct amount of cards)
let clickCounter = 0;
let CardData  = [];
let highScore = [];

//multiplayer-mode
let players = [];
let currentPlayer = 1;

let startTime, endTime;


function submitPLayer(){
    let amountPlayer = document.getElementById("input").value;
    multiplayer(amountPlayer);
    input = document.getElementById("inputbox").style.display = "none";
    // buttons = document.querySelectorAll(".buttons");
    // buttons.forEach(function(buttons) {
    //     buttons.style.display = "flex";
    // });
}

function multiplayer(amountPlayer) {
    for(let i = 1; i <= amountPlayer; i++){
        players.push({
            players: i,
			score: 0
        });
		score = document.createElement("div");
		score.id = "p" + i;
        score.classList.add("deleteScore");
		text = document.createTextNode("Player" + i);
		score.appendChild(text);
		scorebox = document.getElementById("score");
		scorebox.appendChild(score);
    }
    console.table(players);
}


function checkDifficulty(event) {
    let amountOfCards = event.target.id;
    // let amountOfCards = 4;

    let buttons = document.querySelectorAll(".difficulty");
    buttons.forEach(function(buttons) {
        buttons.style.display = "none";
    })
    createCards(amountOfCards);
}


    let dataSet = [];
function createCards(amountOfCards) {

    let counter = 0;
    let dataVar = 1;
    for(let i = 1; i <= amountOfCards; i++) {
        if(counter == 2) {
            dataVar ++;
            counter = 0;
        }
        dataSet.push({
        data: dataVar,
        text:dataVar
       });
       counter ++;
    }

    console.table(dataSet);
    shuffleData(dataSet)
    for(let i = 0; i < amountOfCards; i++) {
       //creating the correct amount of playing cards, based on the entered difficulty(amountOfCards)
        card = document.createElement("div");
        card.data = dataSet[i].data;  
        
        
        card.style.backgroundImage = `url(Frognight.jpeg)`;
        // picture${dataSet[i].data}.png

        card.classList.add("card");
        card.classList.add("back-img");
        text = document.createTextNode(dataSet[i].text);
        

        card.appendChild(text);

        card.addEventListener("click", function(){
            cardClicked(event);
        });

        document.getElementById("mainBoard").appendChild(card);
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

    if(clickCounter < 2 && !clickedCard.classList.contains("back")){
        clickedCard.classList.add("back", "flip");
        clickedCard.classList.remove("back-img");

    let cardID = clickedCard.data;
    console.log("Card-data:",cardID);
    CardData.push(cardID);
    clickCounter ++;
    }
    if(clickCounter === 2) {
        checkPair();    
    }
    if(!startTime) {
        startTimer();
    }
    //change image 
    //counter +1, when counter 2: function "checkPair()" and block the programm from clicking mor cards
}



function checkPair() {
	let data1 = CardData[0];
	let data2 = CardData[1];
    console.table(CardData);
	console.log(currentPlayer);
  
	let outputScore = document.getElementById("p" + currentPlayer);
    
    setTimeout(function(){
	if (data1 === data2) {
	  // Karten passen zusammen
      console.log("pair");
	  // Zug und Score für den aktuellen Spieler aktualisieren
	  players[currentPlayer - 1].score++;
	  outputScore.innerHTML  = players[currentPlayer - 1].score;
      removeCards();
	} else {
        console.log("no pair");
	  // Karten passen nicht zusammen
	    let turnedCard = document.querySelectorAll(".back");
	    turnedCard.forEach(function (card) {
	        card.classList.remove("back");
            card.classList.add("back-img");
	    });
	  // Den nächsten Spieler auswählen
        currentPlayer = (currentPlayer % players.length) + 1;
	}
    console.table(players);
	CardData = [];
	clickCounter = 0;
    }, 1000);
  }
  



function removeCards() {
    //later maybe only change location on the board 
    //placeholder(cards stay in place)
    let cardsToRemove = document.querySelectorAll(".back");
    cardsToRemove.forEach( function(card){
        card.style.visibility = "hidden";
    });
    checkGameEnd();
}


function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function endTimer() {
    endTime = Date.now();
    clearInterval(timerInterval);
    let finalTime = endTime - startTime;
    console.log(finalTime);
}

function updateTimer() {
    let currentTime = Date.now();
    let semiFinalTime = currentTime - startTime;
    let minutes = Math.floor(semiFinalTime / 60000);
    let seconds = Math.floor((semiFinalTime % 60000) / 1000);

    let timerOutput = document.getElementById("timer");
    timerOutput.style.color = "blue";
    timerOutput.textContent = pad(minutes) + ":" + pad(seconds);
}

function pad(num) {
    return num.toString().padStart(2, '0');
}



function checkGameEnd() {
    let totalScore = 0;
    for(let i = 0; i < players.length; i++) {
        console.log(players[i].score);
        totalScore += players[i].score;
    }
    console.log(typeof players[1].score)
    console.log("totalscore",totalScore);
    console.log("playerlength",players.length);
    console.log("datasetlength.",dataSet.length);
    if(totalScore === dataSet.length / 2) {
        alert("game end");    
        endTimer();
    }

}







function gameEnd() {
    highScore.push({
        //score of the winner
    });
}



function restart() {
    //reset all global variables/arrays    
    clickCounter = 0;
    CardID  = [];
    players = [];
    currentPlayer = 1;

    //deleting all cards and the scores
    let cards = document.querySelectorAll(".card");
    cards.forEach(function(card){
        card.parentNode.removeChild(card);
    });
    let score = document.querySelectorAll(".deleteScore");
    score.forEach(function(score) {
        score.parentNode.removeChild(score);
    });





    let buttons = document.querySelectorAll(".difficulty");
    buttons.forEach(function(buttons) {
        buttons.style.display = "flex";
    })
    placeholderForVarName1 = document.getElementById("inputbox").style.display = "flex";
    input = document.getElementById("input").value = "";

    console.log("restart");


    //highscore von dem Gewinner Speichern 
}


