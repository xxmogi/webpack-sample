var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    app: "./src/main.ts"
  },
  output: {
    filename: "[name].bundle.js"
  },
  resolve: {
    root: [path.join(__dirname, 'lib')],
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
  },
  externals: [{
    "jquery": "jQuery",
    "knockout": "ko",
    "knockout-es5": "ko"
  }],
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  }
};
