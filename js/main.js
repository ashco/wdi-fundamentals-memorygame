//defining all 4 cards array
var cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	}
	];

//array to hold picked cards
var cardsInPlay = [];

//flipCard function
var flipCard = function(cardID) {
	//adds picked cards to cardsInPlay
	cardsInPlay.push(cards[cardID].rank);
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
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
}

flipCard(0);
flipCard(2);