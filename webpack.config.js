const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
	  index: './src/index.js',
    navBar: './src/components/navBar.js',
    mainTitle: './src/components/mainTitle.js',
    plate: './src/components/plate.js',
    menu: './src/components/menu.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'development',
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};