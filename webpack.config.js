const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',  //input
  devtool: 'inline-source-map', //to track down errors
  devServer: {  //for webpack-dev-server
    static: './dist' //indicates which directory will be hosted
  },
  plugins: [new HtmlWebpackPlugin({ //generates new index.html and injects all generated bundles
    hash: true,
    title: 'handfull',
    template: './src/index.html'
})],
  output: { //outputs bundled file
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true //cleans up dist folder
  },
  module: {rules: [{test: /\.css$/i, use: ['style-loader', 'css-loader']},  //loaders
    {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'},
    {test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource'}
  ]}
};