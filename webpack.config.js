const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      api: path.resolve(__dirname, 'src/api'),
      utility: path.resolve(__dirname, 'src/utility')    
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: "./index.html"
    })
  ]
}