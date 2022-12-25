import colorsTwig from './colors.twig';
import colorsData from './colors.yml';
import colorsDocs from './colors.mdx';
import './_story-book-colors.scss';

export default {
  title: 'Bootstrap/00-Base/Colors',
  parameters: {
    docs: {
      page: colorsDocs,
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=31%3A6584',
    },
  },
};

export const Colors = () => colorsTwig(colorsData);
