import React, { Component } from "react";
import PLayerCard from "./PlayerCard";

class PlayerCards extends Component {
	render() {
		const { players } = this.props;
		return (
			<div>
				{players.map(player => (
					<PLayerCard player={player} />
				))}
			</div>
		);
	}
}
