var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
	context: __dirname,
	devtool: debug ? "inline-sourcemap" : null,
	entry: "./resources/index",
	output: {
		path: __dirname + "/app/js/",
		filename: "bundle.js"
	},
	plugins: debug ? [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	] : [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components\/)/,
				loader: "babel-loader",
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.(less)$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.(css)$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(ttf|eot|svg|woff|woff2)$/,
				loader: 'file-loader?name=fonts/[name].[ext]'
			}
		]
	}
};

