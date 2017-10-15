//defining all 4 cards in an array
var cards = ["queen", "queen", "king", "king"];

//array to hold the picked cards
var cardsInPlay = [];

//First picked card
var cardOne = cards[0];
var cardTwo = cards[2];

//adds picked cards to cardsInPlay
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

//logic for two card picks
if (cardsInPlay.length === 2){
//alerts for match/no match
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert ("You found a match!");
	} else {
		alert ("Sorry, try again.");
	}
}




//displays picked cards in console
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);