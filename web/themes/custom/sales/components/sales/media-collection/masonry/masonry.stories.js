import masonryTwig from './masonry.twig';
import masonryData from './masonry.yml';
import './masonry';

/**
 * Storybook Definition.
 */
export default {
  title: 'sales/Media Collection/Masonry',
};

export const masonry = () => `
  ${masonryTwig({
    ...masonryData,
  })}
`;
