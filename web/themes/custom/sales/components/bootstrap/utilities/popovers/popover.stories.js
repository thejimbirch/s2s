import popoverTwig from './popover.twig';
import popoverData from './popover.yml';
import './popover';

/**
 * Storybook Definition.
 */
export default {
  title: 'Bootstrap/Utilities/Pop Over',
  argTypes: {
    refresh: {
      name:
        'You may need to navigate to another component and back to trigger popovers to work in Stroybook.',
    },
  },
};

export const PopOver = () => `
  ${popoverTwig({
    ...popoverData,
  })}
`;
