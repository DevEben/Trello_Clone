const path = require('path');

module.exports = {
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'), // Output to the 'dist' directory
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html'
    },
    static: {
      directory: './',
      serveIndex: true,
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  }
};
