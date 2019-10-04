import React from "react";

const PlayerCard = props => {
	return (
		<div>
			<h2>{props.name}</h2>
			<p>{props.country}</p>
			<span>
				<p>{props.id}</p>
			</span>
			<span>
				<p>{props.searches}</p>
			</span>
		</div>
	);
};

export default PlayerCard;
