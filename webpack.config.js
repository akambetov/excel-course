const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const filename = (ext) =>
  isDev ? `bundle.${ext}` : `bundle.[contenthash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: isDev ? 'development' : 'production',
  entry: './index.js',
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.scss'],
    alias: {
      '@': 'src',
      '@core': 'src/core',
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'favicon.ico', to: path.resolve(__dirname, 'dist') }],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
    new ESLintWebpackPlugin({ quiet: true }),
  ],
  devtool: isDev ? 'source-map' : false,
  devServer: {
    port: 3000,
  },
};
