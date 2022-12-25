import dropDownsTwig from './drop-downs.twig';
import dropDownsData from './drop-downs.yml';
// Dropdown JS.
import './drop-downs';
/**
 * Storybook Definition.
 */
export default {
  title: 'Bootstrap/Utilities/Drop Downs',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=0%3A1627',
    },
  },
};

export const dropDowns = () => dropDownsTwig(dropDownsData);
