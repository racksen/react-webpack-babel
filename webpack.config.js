var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8085', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		'./src/index.jsx' // Your appʼs entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'public'),
		publicPath : '/public/'
	},
    plugins : [
      new webpack.HotModuleReplacementPlugin(),  
      new webpack.NoErrorsPlugin()
    ],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: loaders
}
};
