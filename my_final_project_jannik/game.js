//let player select difficulty(depending on that creat the correct amount of cards)
let clickCounter = 0;
let CardID  = [];
let highScore = [];

//multiplayer-mode
let players = [];
let currentPlayer = 1;


function submitPLayer(){
    let amountPlayer = document.getElementById("input").value;
    multiplayer(amountPlayer);
}

function multiplayer(amountPlayer) {
    for(let i = 1; i <= amountPlayer; i++){
        players.push({
            players: i,
			score: 0
        });
		score = document.createElement("div");
		score.id = "p" + i;
		text = document.createTextNode("Player" + i);
		score.appendChild(text);
		scorebox = document.getElementById("score");
		scorebox.appendChild(score);
    }
    console.table(players);
}


function checkDifficulty(event) {
    let amountOfCards;
    let clickedButton = event.target.id;
    if(clickedButton == 1) {
        amountOfCards = 30;
    } else if(clickedButton == 2) {
        amountOfCards = 40;
    } else if(clickedButton == 3) {
        amountOfCards = 50;
    } else if(clickedButton == 4) {
        amountOfCards = 70;
    }
    let buttons = document.querySelectorAll(".difficulty");
    buttons.forEach(function(buttons) {
        buttons.style.display = "none";
    })
    createCards(amountOfCards);
}



function createCards(amountOfCards) {
    let IDs = [];
    let counter = 0;
    let idVar = 1;
    for(let i = 0; i < amountOfCards; i++) {
    //creating the IDs and pushing them into an array
        if(counter == 2) {
            idVar ++;
            counter = 0;
        }
       IDs.push({
        id: idVar,
        text:idVar
       });
       counter ++;
    }

    console.table(IDs);
    shuffleIDs(IDs)
    for(let i = 0; i < amountOfCards; i++) {
       //creating the correct amount of playing cards, based on the entered difficulty(amountOfCards)
        card = document.createElement("div");
        card.id = IDs[i].id;  
        card.classList.add("front");
        text = document.createTextNode(IDs[i].text);

        card.appendChild(text);

        card.addEventListener("click", function(){
            cardClicked(event);
        });

        document.getElementById("mainBoard").appendChild(card);
    }
}
function shuffleIDs(arr) {
//shuffles the IDs and content of the cards
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function cardClicked(event) {
    clickedCard = event.target;

    if(clickCounter < 2 && !clickedCard.classList.contains("back")){
        clickedCard.classList.add("back");

    let cardID = clickedCard.id;
    CardID.push(cardID);
    clickCounter ++;
    }
    if(clickCounter === 2) {
        checkPair();    
    }
    //change image 
    //counter +1, when counter 2: function "checkPair()" and block the programm from clicking mor cards
}



function checkPair() {
	let id1 = CardID[0];
	let id2 = CardID[1];
	console.log(currentPlayer);
  
	let outputScore = document.getElementById("p" + currentPlayer);
    

	if (id1 === id2) {
	  // Karten passen zusammen
	  removeCards();
  
	  // Zug und Score für den aktuellen Spieler aktualisieren
	  players[currentPlayer - 1].score++;
	  outputScore.innerHTML  = players[currentPlayer - 1].score;
  
	} else {
	  // Karten passen nicht zusammen
	    let turnedCard = document.querySelectorAll(".back");
	    turnedCard.forEach(function (card) {
	        card.classList.remove("back");
	    });
	  // Den nächsten Spieler auswählen
        currentPlayer = (currentPlayer % players.length) + 1;
	}
    console.table(players);
	CardID = [];
	clickCounter = 0;
  }
  



function removeCards() {
    //later maybe only change location on the board 
    let cardsToRemove = document.querySelectorAll(".back");
    cardsToRemove.forEach( function(card){
        card.parentNode.removeChild(card);
    });
}














function gameEnd() {
    highScore.push({
        //score of the winner
    });
}



function restart() {
    
}


