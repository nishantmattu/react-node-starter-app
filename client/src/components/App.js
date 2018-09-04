import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {

	

	componentDidMount() {
	fetch('/api/')
      .then(res => console.log(res.json()))
      .then(user => console.log(user));
	}

	render() {
		return (
			<div>Starter React App</div>
		);
	}
}

export default App;