const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
	  index: './src/index.js',
    navBar: './src/components/navBar.js',
    mainTitle: './src/components/mainTitle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'restaurant',
    }),
  ],
  output: {
	  filename: '[name].bundle.js',
	  path: path.resolve(__dirname, 'dist'),
	  clean: true,	
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};