const path = require("path");

module.exports = {
  entry: "./handler.js",
  target: "node",
  output: {
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, ".webpack"),
    filename: "handler.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "stage-2"]
          }
        }
      }
    ]
  }
};
