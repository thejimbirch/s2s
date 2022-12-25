const path = require('path');
const glob = require('glob');
const loaders = require('./loaders');
const plugins = require('./plugins');

const webpackDir = path.resolve(__dirname);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

// Returns an object of JS folders and files based on pattern.
function globJS(pattern) {
  const entries = {};
  const patterns = path.resolve(rootDir, pattern);
  glob.sync(patterns).forEach((file) => {
    const filePath = file.split('sales/components')[1];
    const baseFileName = path.basename(filePath);
    // eslint-disable-next-line prettier/prettier
    const newfilePath = `${filePath.replace(
      baseFileName,
      '',
    )}${baseFileName.replace('.js', '')}`;
    entries[`js/${newfilePath}`] = file;
  });
  return entries;
}

function getEntries() {
  const entries = {
    // Bootstrap Components JS
    ...globJS(
      'components/bootstrap/components/**/!(*.stories|*.component|*.min|*.test).js',
    ),
    // Bootstrap Utilities JS
    ...globJS(
      'components/bootstrap/utilities/**/!(*.stories|*.component|*.min|*.test).js',
    ),
    // sales JS
    ...globJS(
      'components/sales/**/!(*.stories|*.component|*.min|*.test).js',
    ),
  };

  entries.svgSprite = path.resolve(webpackDir, 'svgSprite.js');
  entries['css/global'] = path.resolve(webpackDir, 'css.js');
  entries['css/rte'] = path.resolve(webpackDir, 'rte-css.js');

  return entries;
}

module.exports = {
  stats: {
    errorDetails: true,
  },
  entry: getEntries(),
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.SVGSpriteLoader,
      loaders.ImageLoader,
      loaders.JSLoader,
    ],
  },
  plugins: [
    plugins.FixStyleOnlyEntriesPlugin,
    plugins.MiniCssExtractPlugin,
    plugins.ImageminPlugin,
    plugins.SpriteLoaderPlugin,
    plugins.ProgressPlugin,
    plugins.CleanWebpackPlugin,
  ],
  output: {
    path: distDir,
    filename: '[name].js',
  },
};
