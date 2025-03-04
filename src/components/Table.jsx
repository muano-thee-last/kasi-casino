/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import generateDeck from "./Deck";
import Card from "./Card";
import Agent from "./Agent";
import "./Table.css";

const Table = () => {
	const [deck, setDeck] = useState(generateDeck());
	const [myCards, setMyCards] = useState(deck.slice(0, 10));
	console.log("size of deck ", deck.length);
	const [opponentCards, setOpponentCards] = useState(deck.slice(10, 20));
	const [tableCards, setTableCards] = useState([]);

	const notDuplicateTableCard = (c) => {
		for (let i = 0; i < tableCards.length; i++) {
			if (
				c.number == tableCards[i].number &&
				c.suite == tableCards[i].suite
			) {
				return false;
			}
		}
		return true;
	};

	const allowDrop = (e) => {
		e.preventDefault();
	};

	// const agent = new Agent("AI Bot");

	// useEffect(() => {
	// 	// Simulate AI thinking & making a move after 2 seconds
	// 	setTimeout(() => {
	// 		const gameState = { opponentCards, tableCards };
	// 		agent.observeGameState(gameState);
	// 		const move = agent.makeMove(gameState);

	// 		if (move.action === "take") {
	// 			setTableCards((prev) =>
	// 				prev.filter((card) => card !== move.card)
	// 			);
	// 			setOpponentCards((prev) => [...prev, move.card]);
	// 		}
	// 	}, 2000);
	// }, [tableCards]); // Runs when tableCards change

	return (
		<div className="container">
			<h1 style={{ marginTop: "0" }}>Kasino</h1>

			<div
				className="table"
				onDrop={(e) => {
					let card = JSON.parse(e.dataTransfer.getData("card"));
					console.log("got the data!!: ", card);

					notDuplicateTableCard(card)
						? setTableCards([...tableCards, card])
						: console.log("card has aduplicate!");

					setMyCards(
						myCards.filter(
							(c) =>
								!(
									c.number == card.number &&
									c.suite == card.suite
								)
						)
					);
					console.log(card);
				}}
				onDragOver={allowDrop}
			>
				<h2>Table</h2>
				<div className="hand">
					{tableCards.map((card, index) => (
						<Card
							key={index}
							number={card.number}
							suite={card.suite}
							hide={false}
						/>
					))}
				</div>
			</div>

			<h1>My Cards</h1>
			<div className="hand">
				{myCards.map((card, index) => (
					<Card
						key={index}
						number={card.number}
						suite={card.suite}
						hide={false}
						onClick={() => {
							setTableCards(Set([...tableCards, card]));
							setMyCards(myCards.filter((c) => c != card));
							console.log(card);
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default Table;
