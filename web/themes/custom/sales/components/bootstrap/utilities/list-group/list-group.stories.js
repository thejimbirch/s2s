import listGroupTwig from './list-group.twig';
import listGroupData from './list-group.yml';
/**
 * Storybook Definition.
 */
export default {
  title: 'Bootstrap/Utilities/List Group',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=0%3A1594',
    },
  },
};

export const listGroup = () => listGroupTwig(listGroupData);
