import siteSearchTwig from './site-search.twig';

/**
 * Storybook Definition.
 */
export default {
  title: 'sales/Site Search',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const siteSearch = () => siteSearchTwig();
