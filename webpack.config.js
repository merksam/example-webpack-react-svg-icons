const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (p) => path.join(__dirname, p);

module.exports = () => ({
  resolve   : {
    extensions : ['.ts', '.tsx', '.js'],
  },
  plugins   : [
    new HtmlWebpackPlugin({
      template : resolve('/src/index.html'),
    }),
  ],
  module    : {
    rules : [
      {
        test    : /\.ts(x?)$/,
        exclude : /node_modules/,
        use     : 'ts-loader',
      },
      {
        test : /\.css$/i,
        use  : [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test : /\.svg/i,
        use  : 'raw-loader',
      },
    ],
  },
  devServer : {
    contentBase : resolve('dist'),
    port        : 4000,
    stats       : 'minimal',
  },
  entry     : [
    resolve('src/index.tsx'),
  ],
  output    : {
    filename   : '[name].[contenthash].js',
    path       : resolve('dist'),
    publicPath : '/',
  },
});
