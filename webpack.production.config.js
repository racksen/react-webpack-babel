var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

module.exports = {
	entry: [
		'./src/index.jsx' // Your appʼs entry point
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		 alias: {
			'react$': path.join(__dirname, 'node_modules', 'react','dist','react.min.js'),
			'react-dom$': path.join(__dirname, 'node_modules', 'react-dom','dist','react-dom.min.js')
		}
	},
	module: {
		loaders: loaders
	}
};
