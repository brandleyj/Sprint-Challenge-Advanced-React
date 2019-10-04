import React, { Component } from "react";

class PlayerCard extends Component {
	render() {
		const {
			player: { name, country, id, searches }
		} = this.props;
		return (
			<div>
				<h2>{name}</h2>
				<p>{country}</p>
				<span>
					<p>{id}</p>
				</span>
				<span>
					<p>{searches}</p>
				</span>
			</div>
		);
	}
}

export default PlayerCard;
