const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'development',
  entry: './docs/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './docs',
    hot: true,
    inline: true
  },
};