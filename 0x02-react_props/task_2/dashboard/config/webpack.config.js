const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
	plugins: [
		new HtmlWebpackPlugin({
			title: "webpack output",
			template: './dist/index.html',
		}),
	],

	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist')
	},

	devServer: {
		static: {
			directory: path.resolve(__dirname, '../dist'),
		},
		open: true,
		hot: true,
		port: 3000,
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},

	module: {

		rules: [
			{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				}
			}

		},

		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
		},

		{
			test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
			use: {
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: '[name].[hash:8].[ext]',
					outputPath: 'images',
				}
			}
		}
		]
	},
	mode: 'development',
}
