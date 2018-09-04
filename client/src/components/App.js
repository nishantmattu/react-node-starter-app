import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {

	

	async componentDidMount() {
	const res = await axios.get('/api/');
	console.log(res);
      
	}

	render() {
		return (
			<div>Starter React App</div>
		);
	}
}

export default App;