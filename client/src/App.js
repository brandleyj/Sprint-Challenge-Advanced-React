import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users: []
		};
	}

	componentDidMount() {
		axios.get("http://localhost:5000/api/players").then(res => {
			console.log(res.data);
			this.setState({
				users: [...this.state.users, res.data]
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
