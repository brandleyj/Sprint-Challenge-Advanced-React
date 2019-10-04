import React from "react";
import PlayerCard from "./PlayerCard";

function PlayerCards(props) {
	console.log("playercards", props);
	return (
		<div>
			{props.players.map(player => {
				return (
					<PlayerCard
						name={player.name}
						country={player.country}
						id={player.id}
						searches={player.searches}
					/>
				);
			})}
		</div>
	);
}

export default PlayerCards;
