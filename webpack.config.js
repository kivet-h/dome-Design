// webpack.config.js
const {resolve} = require("path");
module.exports = {
  // 组件库的起点入口
  entry: './src/index.tsx',
  output: {
    filename: "r-ui.umd.js", // 打包后的文件名
    path: resolve(__dirname, 'dist'), // 打包后的文件目录：根目录/dist/
    library: 'rui', // 导出的UMD js会在window挂rui，即可以访问window.rui
    libraryTarget: 'umd' // 导出库为UMD形式
  },
  resolve: {
    // webpack 默认只处理js、jsx等js代码
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  externals: {
    // 打包过程遇到以下依赖导入，不会打包对应库代码，而是调用window上的React和ReactDOM
    // import React from 'react'
    // import ReactDOM from 'react-dom'
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  // 模块
  module: {
    // 规则
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
