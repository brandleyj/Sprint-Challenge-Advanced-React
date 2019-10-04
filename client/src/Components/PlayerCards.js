import React from "react";
import PlayerCard from "./PlayerCard";

function PlayerCards(props) {
	console.log("playercards", props.players[0]);
	const players = props.players[0];
	console.log(players);
	return (
		<div>
			{players &&
				players.map(player => {
					console.log(player);
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
