import tablesTwig from './tables.twig';
import tablesDocs from './tables.mdx';

export default {
  title: 'Bootstrap/00-Base/Tables',
  parameters: {
    docs: {
      page: tablesDocs,
    },
  },
};

export const Tables = () => tablesTwig();
