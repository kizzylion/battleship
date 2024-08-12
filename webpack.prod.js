const path = require("path")
const { merge } = require("webpack-merge")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  entry: "./src/modules/index.js",
  mode: "production",
  devtool: "source-map",

  output: {
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // Add this rule to handle .css files
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
})

console.log(
  "Favicon path: ",
  path.resolve(__dirname, "src/assets/images/logo.png")
)
