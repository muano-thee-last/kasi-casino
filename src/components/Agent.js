class Agent {
	constructor(name) {
		this.name = name;
	}

	observeGameState(gameState) {
		// Extract useful information from the game state
		console.log(`${this.name} is analyzing the game state...`, gameState);
	}

	makeMove(gameState) {
		// TODO: Implement AI logic here
		console.log(`${this.name} is making a move...`);

		// Example: AI always takes the first available card (replace this)
		if (gameState.tableCards.length > 0) {
			return {
				action: "take",
				card: gameState.tableCards[0],
			};
		} else {
			return { action: "pass" }; // No move available
		}
	}
}

export default Agent;
