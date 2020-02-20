const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
  return {
    entry: {
      app: ['./src/index.tsx']
    },

    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "dist")
    },

    devServer: {
      hot: true,
      historyApiFallback: true,
      publicPath: '/'
    },

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json", ".css", ".less"]
    },

    module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: [':data-src']
            }
          }
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "typings-for-css-modules-loader",
              options: {
                modules: true,
                namedExport: true,
                camelCase: true,
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                importLoaders: 1,
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "less-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
          test: /\.(png|jpg|gif|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      new MiniCssExtractPlugin({}),
      new webpack.DefinePlugin({
        "process.env": {
        }
      })
    ]
  }
};