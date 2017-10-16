//defining all 4 cards array
var cards = ["queen", "queen", "king", "king"];

//array to hold picked cards
var cardsInPlay = [];

//flipCard function
var flipCard = function(cardID) {
	//adds picked cards to cardsInPlay
	cardsInPlay.push(cards[cardID]);
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
	console.log("User flipped " + cards[cardID]);
}

flipCard(0);
flipCard(1);