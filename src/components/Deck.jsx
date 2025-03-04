const generateDeck = () => {
	let cards = [];
	let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
	let suites = ["hearts", "clubs", "spades", "diamonds"];

	// Create deck of 40 cards
	for (let i = 0; i < numbers.length; i++) {
		for (let j = 0; j < suites.length; j++) {
			cards.push({
				id: `${i}-${j}`, // Unique ID
				number: numbers[i],
				suite: suites[j],
				hidden: true, // Initially hidden
			});
		}
	}

	// Shuffle deck
	for (let i = cards.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[cards[i], cards[j]] = [cards[j], cards[i]];
	}

	return cards;
};

export default generateDeck;
