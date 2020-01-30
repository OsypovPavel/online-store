const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  style: path.join(__dirname, '../src/assets/style'),
  assets: 'assets',
};

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    bundle: PATHS.src,
  },
  output: {
    filename: `${PATHS.assets}/js/[name]-[hash].js`,
    path: PATHS.dist,
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node-modules/',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true}
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: 'postcss.config.js' } },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true},
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: `[name].[ext]`,
        },
      },
    ],
  },
  plugins: [
    new RemovePlugin({
      before: {
        include: ['dist'],
      },
    }),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}/css/[name]-[hash].css`,
    }),
    new HtmlWebpackPlugin({
      template: `./builder/index.ejs`,
      filename: './index.html',
      inject: false,
    }),
    new CopyWebpackPlugin([
      {from: `${PATHS.src}/assets/img`, to: `${PATHS.assets}/img`}
    ]),
  ],
  resolve: {
    alias: {
      '@assets': `${PATHS.src}/assets`,
      '@components': `${PATHS.src}/components`,
      '@shared': `${PATHS.src}/shared`,
      '@icons': `${PATHS.src}/assets/Icons`,
    },
  },
};
