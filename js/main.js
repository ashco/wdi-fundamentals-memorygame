//defining all 4 cards array w/ objects
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
var flipCard = function() {
	//takes data-id value, sets number to cardId variable
	var cardId = this.getAttribute('data-id');
	//changes image of selected card to .cardImage
	this.setAttribute('src', cards[cardId].cardImage);
	//adds picked cards to cardsInPlay variable
	cardsInPlay.push(cards[cardId].rank);

	//logic for two card picks
	if (cardsInPlay.length === 2){
	//alerts for match/no match
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert ("You found a match!");
		} else {
			alert ("Sorry, try again.");
		}
	}
}

//function that creates cards to flip
var createBoard = function() {
	//for loop loops 4 times, creates 4 cards
	for (var i = 0; i < cards.length; i++) {
		//each loop creates var cardElement with img
		var cardElement = document.createElement('img');
		//adds attribute back image
		cardElement.setAttribute('src', 'images/back.png');
		//adds data-id for each cardElement
		cardElement.setAttribute('data-id', i);
		//adds event listener to run flipCard function on click
		cardElement.addEventListener('click', flipCard);
		//inserts cardElement as child to game-board ID in HTML
		document.getElementById('game-board').appendChild(cardElement);
	}
}

//call function createBoard to start it up
createBoard()