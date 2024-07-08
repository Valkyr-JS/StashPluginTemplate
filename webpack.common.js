const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const pluginID = "YourPluginID"; // ! Change this to the your unique plugin ID. This must match the name given to any Javascript or CSS files referenced in `./src/source.yml`.

module.exports = {
  entry: "./src/main.tsx",
  output: {
    filename: pluginID + ".js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "src/source.yml",
          to: pluginID + ".yml",
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: pluginID + ".css",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
