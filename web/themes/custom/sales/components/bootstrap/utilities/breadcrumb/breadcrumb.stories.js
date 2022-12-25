import breadcrumbTwig from './breadcrumb.twig';
import breadcrumbData from './breadcrumb.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Bootstrap/Utilities/Breadcrumb',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=31%3A6514',
    },
  },
};

export const breadcrumb = () => breadcrumbTwig(breadcrumbData);
