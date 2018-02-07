'use strict';

var webpack = require('webpack');
let path = require('path');

console.log(path.join(__dirname, './src'));

module.exports = {
  entry: {
    RotateMenu: './src/RotateMenu.jsx',
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    libraryTarget: "umd"
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      output: {
        ascii_only: true,
      },
      compress: {
        warnings: false,
      },
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, './src')],
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    }
  }
};
