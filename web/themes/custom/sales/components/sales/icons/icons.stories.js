import iconTwig from './icons.twig';
import iconDocs from './icons.mdx';

const svgIcons = require.context('../../../images/icons/', true, /\.svg$/);
const icons = [];
svgIcons.keys().forEach((key) => {
  const icon = key.split('./')[1].split('.')[0];
  icons.push(icon);
});

/**
 * Storybook Definition.
 */
export default {
  title: 'sales/Icons',
  parameters: {
    docs: {
      page: iconDocs,
    },
  },
};

export const Icons = () => iconTwig({ icons });
