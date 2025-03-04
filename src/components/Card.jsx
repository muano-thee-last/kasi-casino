/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";
import "./Card.css";

const Card = ({ number, suite, hide, onClick }) => {
	const suites = {
		hearts: "❤️",
		diamonds: "🔶",
		spades: "♠️",
		clubs: "♣️",
	};

	const [isHidden, setIsHidden] = useState(hide);
	const flipCard = () => {
		setIsHidden(!isHidden);
		onClick && onClick();
	};

	return (
		<div
			onClick={onClick}
			draggable
			onDragStart={(e) => {
				e.dataTransfer.setData(
					"card",
					JSON.stringify({ number, suite })
				);
			}}
			className={`card ${isHidden ? "hidden" : "flipped"}`}
		>
			{!isHidden ? (
				<>
					<h2 className="card-number">{number}</h2>
					<h2 className="card-suite">{suites[suite]}</h2>
				</>
			) : (
				<div className="hidden-card">🔆</div>
			)}
		</div>
	);
};

Card.propTypes = {
	number: PropTypes.string.isRequired,
	suite: PropTypes.string.isRequired,
	hide: PropTypes.bool,
	onClick: PropTypes.func,
};

export default Card;
