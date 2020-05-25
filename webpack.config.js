const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
  entry: './src/index.js',

  output: {
    path: resolve('dist'),
    filename: 'index.bundle.[hash:6].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Learn ES2019',
    })
  ],

  devServer: {
    // 不管是警告，还是错误全部展示在浏览器上
    overlay: {
      warnings: true,
      errors: true,
    },
    // 自动打开浏览器
    open: true,
    // 启动 GZip 压缩
    compress: true,
    // 关闭 host 检查
    disableHostCheck: true,
  },
};
