import React from "react";
import "./App.css";
import axios from "axios";
import PlayerCards from "./Components/PlayerCards";
import NavBar from "./Components/NavBar";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			players: []
		};
	}

	componentDidMount() {
		axios
			.get("http://localhost:5000/api/players")
			.then(res => {
				console.log(res.data);
				this.setState({
					players: [res.data]
				});
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<NavBar />
				<PlayerCards players={this.state.players} />
			</div>
		);
	}
}

export default App;
