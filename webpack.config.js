var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/html/index.html',
  filename: 'index.html',
  inject: 'body'
});

var plugins = [
  HTMLWebpackPluginConfig,
];

module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./js/index.js",
  },
  output: {
    filename: "main.js",
    path: __dirname + "/dist",
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    root: path.resolve(__dirname, './app/js'),
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  plugins: plugins,
};
