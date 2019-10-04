import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			players: []
		};
	}

	componentDidMount() {
		axios.get("http://localhost:5000/api/players").then(res => {
			console.log(res.data);
			this.setState({
				players: [...this.state.players, res.data]
			});
		});
	}

	render() {
		return (
			<div>
				<p>hello</p>
			</div>
		);
	}
}

export default App;
