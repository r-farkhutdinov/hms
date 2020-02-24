const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = (env, argv) => {
  const outputDir = path.join(__dirname, "public");
  const srcDir = path.join(__dirname, "components");

  return {
    target: "web",
    entry: "./src/index.ts",
    output: {
      path: path.join(outputDir),
      filename: path.join("js", "bundle.js")
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: {
            getCustomTransformers: () => ({
              before: [tsImportPluginFactory({ style: "css" })]
            })
          }
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: true
                // localIdentName: "[local]___[hash:base64:5]"
              }
            },
            {
              loader: "less-loader"
            }
          ]
        },
        {
          test: /\.(gif|png|jpg|svg)$/,
          use: "file-loader"
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: ["url-loader?limit=100000"]
        }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: path.join("css", "styles.css")
      })
    ]
  };
};
