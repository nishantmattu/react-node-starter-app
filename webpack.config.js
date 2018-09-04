const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); //creates our index html file for us


module.exports = {
	entry: ['@babel/polyfill', './client/src/index.js'],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{

				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}

			}
		]
	},
	 devServer: {
	 	port: 3000,
   		open: true,
   		proxy: {
	      '/api': 'http://localhost:5001'
	    }
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './client/public/index.html'
		})
	]


}