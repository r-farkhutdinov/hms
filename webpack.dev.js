const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common.js");

module.exports = (env, argv) => {
  const outputDir = path.join(__dirname, "public");
  const srcDir = path.join(__dirname, "src");
  const restProxyTarget =
    (env && env.restProxyTarget) ||
    "https://xn--b1add.xn--80aaa3bi1bsw.xn--p1ai/";

  console.log(restProxyTarget);

  return merge(common(env, argv), {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      hot: true,
      open: false,
      contentBase: outputDir,
      publicPath: "/",
      historyApiFallback: true,
      proxy: [
        {
          context: ["/api/"],
          target: restProxyTarget
        },
        {
          context: ["/v1/graphql"],
          target: "http://localhost:9555"
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          production: false
        }
      }),
      new webpack.SourceMapDevToolPlugin({
        filename: "[file].map",
        moduleFilenameTemplate: path.relative(srcDir, "[resourcePath]")
      })
    ]
  });
};
