// webpack.config.js
const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  // 组件库的起点入口
  entry: "./src/index.tsx",
  output: {
    filename: "druid-design.umd.[chunkhash:8].js", // 打包后的文件名
    path: resolve(__dirname, "dist"), // 打包后的文件目录：根目录/dist/
    // library: "rui", // 导出的UMD js会在window挂rui，即可以访问window.rui
    // libraryTarget: "umd", // 导出库为UMD形式
    publicPath: "/", // 打包后文件的公共前缀路径
  },
  resolve: {
    // webpack 默认只处理js、jsx等js代码
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  externals: {
    // 打包过程遇到以下依赖导入，不会打包对应库代码，而是调用window上的React和ReactDOM
    // import React from 'react'
    // import ReactDOM from 'react-dom'
    react: "React",
    "react-dom": "ReactDOM",
  },
  // 模块
  module: {
    // 规则
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          // webpack中的顺序是【从后向前】链式调用的
          // 所以对于less先交给less-loader处理，转为css
          // 再交给css-loader
          // 最后导出css（MiniCssExtractPlugin.loader）
          // 所以注意loader的配置顺序
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    // 插件用于最终的导出独立的css的工作
    new MiniCssExtractPlugin({
      filename: "druid-design.umd.[chunkhash:8].css",
    }),
  ],
};
