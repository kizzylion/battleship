const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { Chunk } = require("webpack")

module.exports = {
  entry: "./src/modules/index.js",
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: "./dist",
    port: 3000,
    hot: false,
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Battleship",
      template: "./src/index.html",
      inject: "body",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
}
