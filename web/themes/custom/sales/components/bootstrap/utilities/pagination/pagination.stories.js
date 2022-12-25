import paginationTwig from './pagination.twig';
import paginationData from './pagination.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Bootstrap/Utilities/Pagination',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=0%3A1399',
    },
  },
};

export const Pagination = () => paginationTwig(paginationData);
