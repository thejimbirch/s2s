const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
});
