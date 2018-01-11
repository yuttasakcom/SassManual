const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = dir => path.resolve(__dirname, dir)

const config = {
  entry: './js/app.js',
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.scss/, use: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ]
}

module.exports = config
