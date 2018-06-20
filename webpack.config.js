const { EnvironmentPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",

  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].[hash].bundle.js",
    path: __dirname + "/dist",
  },

  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js",
      ".json",
    ],
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: "file-loader",
        options: {
          outputPath: "assets/",
        },
      },
    ],
  },

  plugins: [
    new EnvironmentPlugin({
      API_BASE_URL: "/api",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  devServer: {
    historyApiFallback: true,
  }
};
