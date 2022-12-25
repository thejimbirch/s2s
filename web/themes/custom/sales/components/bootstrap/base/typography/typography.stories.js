import headingsTwig from './headings.twig';
import textTwig from './text.twig';
import blockQoutesTwig from './blockqoutes.twig';
import typographyDocs from './typography.mdx';

export default {
  title: 'Bootstrap/00-Base/Typography',
  parameters: {
    docs: {
      page: typographyDocs,
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=34%3A6750',
    },
  },
};

export const Headings = () => headingsTwig();
export const Text = () => textTwig();
export const blockQoutes = () => blockQoutesTwig();
