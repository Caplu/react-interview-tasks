import path from 'path';
import webpack from 'webpack';

export const development = () => ({
  devtool: 'eval-source-map',
  entry: {
    javascript: [
      'webpack-hot-middleware/client',
      './src/index',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(0),
      __ENVIRONMENT__: JSON.stringify('development'),
    }),
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: [
          'babel',
          'eslint-loader',
        ],
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader',
      },
      {
        test: /\.js$/,
        loaders: [
          'react-hot',
          'babel',
        ],
        exclude: /node_modules/,
      },
    ],
  },
});
