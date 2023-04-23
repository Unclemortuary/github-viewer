const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
        })
    ],
    devServer: {
        port: 3030,
        watchFiles: 'src/*',
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
    },
    devtool: 'eval-source-map',
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
          test: /\.css$/i,
          include: path.resolve(__dirname, 'src'),
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          type: 'asset/inline'
        },
      ],
    },
    resolve: {
      enforceExtension: false,
      extensions: ['.js', '.jsx', '.scss', '.html', '.json'],
    },
    optimization: {
      minimize: true
    }   
  }
};