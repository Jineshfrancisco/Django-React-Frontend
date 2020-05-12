import React, { Component } from 'react';
import Welcome from './components/Welcome';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Welcome name="Django - React Application" content="" />
				<Welcome
					name=""
					content="A Simple React Frontend Scaffolding for Django with Bootstrap "
				/>
				<Welcome
					name="Django Version 2.2.12"
					content="Build on Top Django"
				/>
				<Welcome
					name="Hello All Have a Nice Day"
					content="created by Jinesh Francis"
				/>
			</React.Fragment>
		);
	}
}

export default App;
