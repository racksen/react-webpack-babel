require("../node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
	render() {
		return (
			<div>
				Simple React + Babel + Bootstrap + Webpack
				<h1>Hello Senthil....</h1>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
