var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
var merge = require("webpack-merge");

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, "app");
var BUILD_PATH = path.resolve(ROOT_PATH, "build");

process.env.BABEL_ENV = TARGET;

var common = {
  entry: APP_PATH,
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  output: {
    path: BUILD_PATH,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ["style", "css"],
        include: APP_PATH
      },
      {
        test: /\.jsx?$/,
        loaders: ["babel"],
        include: APP_PATH
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Kanban"
    })
  ],
};

if (TARGET === "start" || !TARGET) {
  module.exports = merge(common, {
    devtool: "eval-source-map",
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      port: 8888,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if (TARGET === "build") {
  module.exports = merge(common, {
    devtool: "source-map",
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          "NODE_ENV": JSON.stringify("prouction")
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  })
}

