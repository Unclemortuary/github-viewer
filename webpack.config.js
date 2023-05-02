const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = function(env, argv) {
  return {
    entry: path.join(__dirname, "src/index.js"),
    output: {
      path: path.join(__dirname, "/build"),
      filename: "index.js",
      clean: true,
      library: {
        name: 'github-viewer',
        type: 'umd'
      }
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "src/index.html",
        }),
        new webpack.DefinePlugin({
          'API_TOKEN': JSON.stringify(env.apiToken)
        })
    ],
    devServer: {
        port: 3030,
        watchFiles: 'src/*',
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
    },
    devtool: argv.mode === 'development' ? 'eval-source-map' : false,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(scss|css)$/i,
          include: [
            path.resolve(__dirname, 'src'),
            /node_modules/
          ],
          use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          type: 'asset/inline'
        },
      ],
    },
    resolve: {
      enforceExtension: false,
      extensions: ['.js', '.jsx', '.css', '.scss', '.html', '.json'],
    },
    optimization: {
      minimize: true
    }   
  }
};