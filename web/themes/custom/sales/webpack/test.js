const path = require('path');
const glob = require('glob');
const loaders = require('./loaders');
const plugins = require('./plugins');

const webpackDir = path.resolve(__dirname);
const rootDir = path.resolve(__dirname, '..');

// Bootstrap CSS Components
const bootstrapCssPatterns = path.resolve(
  rootDir,
  'components/bootstrap/components/**/!(*.stories|*.component|*.min|*.test).scss',
);
glob.sync(bootstrapCssPatterns).forEach((file) => {
  const filePath = file.split('sales/components')[1];
  const baseFileName = path.basename(filePath);
  // eslint-disable-next-line prettier/prettier
  const newfilePath = `${filePath.replace(
    baseFileName,
    '',
  )}css/${baseFileName.replace('.scss', '')}`;
  console.log(newfilePath);
});
