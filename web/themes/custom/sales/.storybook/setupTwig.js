const { resolve } = require('path');
const twigDrupal = require('twig-drupal-filters');
const twigBEM = require('bem-twig-extension');
const twigAddAttributes = require('add-attributes-twig-extension');
const { addDrupalExtensions } = require('drupal-twig-extensions/twig');

/**
 * Fetches project-based variant configuration. If no such configuration
 * exists, returns default values.
 *
 * @returns project-based variant configuration, or default config.
 */
const fetchVariantConfig = () => {
  try {
    return require('../project.emulsify.json').variant.structureImplementations;
  } catch (e) {
    return [
      {
        name: 'bootstrap',
        directory: 'components/bootstrap',
      },
      {
        name: 'sales',
        directory: 'components/sales',
      },
    ];
  }
};

module.exports.namespaces = {};
for (const { name, directory } of fetchVariantConfig()) {
  module.exports.namespaces[name] = resolve(__dirname, '../', directory);
}

/**
 * Configures and extends a standard twig object.
 *
 * @param {Twig} twig - twig object that should be configured and extended.
 *
 * @returns {Twig} configured twig object.
 */
module.exports.setupTwig = function setupTwig(twig) {
  twig.cache();
  twigDrupal(twig);
  twigBEM(twig);
  twigAddAttributes(twig);
  addDrupalExtensions(twig);
  return twig;
};
