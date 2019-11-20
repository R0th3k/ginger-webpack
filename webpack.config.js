const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }, 
  devServer:{
    port: 7777
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}