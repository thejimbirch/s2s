import cardGridTwig from './card-grid.twig';
import cardGridData from './card-grid.yml';
/**
 * Storybook Definition.
 */
export default { title: 'sales/Card Grid' };

export const cardGrid = () => cardGridTwig(cardGridData);
