//let player select difficulty(depending on that creat the correct amount of cards)
let amountOfCards;
let clickCounter = 0;
let CardID  = [];
let player = 1;
let scoreP1 = 0;
let scoreP2 = 0;



function checkDifficulty(event) {
    let clickedButton = event.target;
    let buttonID = clickedButton.id;
    if(buttonID == 1) {
        amountOfCards = 30;
    } else if(buttonID == 2) {
        amountOfCards = 40;
    } else if(buttonID == 3) {
        amountOfCards = 50;
    } else if(buttonID == 4) {
        amountOfCards = 70;
    }
    let buttons = document.querySelectorAll(".difficulty");
    buttons.forEach(function(buttons) {
        buttons.style.display = "none";
    })
    setup();
}



function setup() {
    let cache = [];
    let counter = 0;
    let idVar = 1;
    for(let i = 0; i < amountOfCards; i++) {
    //creating the IDs and pushing them into an array
        if(counter == 2) {
            idVar ++;
            counter = 0;
        }
       cache.push({
        id: idVar,
        text: "card" +idVar
       });
       counter ++;

    }
    console.table(cache);
    shuffleIDs(cache)
    for(let i = 0; i < amountOfCards; i++) {
       //creating the correct amount of playing cards, based on the entered difficulty(amountOfCards)
        card = document.createElement("div");
        card.id = cache[i].id;  
        card.classList.add("front");
        text = document.createTextNode(cache[i].text);

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
    console.log("player:",player);


    if(id1 === id2) {
    //cards are matching
        alert("pair"); 
        console.table("davor:",CardID);
        removeCards();
        if(player === 1) {
            scoreP1 ++;
        } else {
            scoreP2 ++;
        }
    } else {
    //cards are not matching
        alert("no pair");
        let turnedCard = document.querySelectorAll(".back")   
        turnedCard.forEach(function(card) {
            card.classList.remove("back");
        }) 
        if(player === 1) {
            player = 2;
        } else {
            player = 1;
        }
    }
    console.table("davor:",CardID);
    CardID = [];
    console.table("danach:",CardID);
    clickCounter = 0;
}



function removeCards() {
    let cardsToRemove = document.querySelectorAll(".back");
    cardsToRemove.forEach( function(card){
        card.parentNode.removeChild(card);
    });
}


















function restart() {
    
}