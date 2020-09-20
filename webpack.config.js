const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // 开发模式
  devtool: 'source-map', // 开启sourceMap
  devServer: {
    contentBase: './dist', // 服务器启动根目录设置为dist
    open: true, // 自动打开浏览器
    port: 8081, // 配置服务启动端口，默认是8080
  },
  entry: { // 入口文件
    main:'./src/index.js'
  },
  output: { // 出口文件
    publicPath:"",
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test: /\.js$/, // 正则匹配js文件
        exclude: /node_modules/, // 排除 node_modules 文件夹
        loader: "babel-loader", // 使用 babel-loader
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html' // 使用模板文件
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin() // webpack内置的热更新插件
  ]
}
