var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config')

new WebpackDevServer(webpack(config),{
    publicPath : config.output.publicPath,
    hot: true,
    historyApiFallBack : false
}).listen(8085, 'localhost')
 