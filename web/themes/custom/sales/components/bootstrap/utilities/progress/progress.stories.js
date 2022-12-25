import progressTwig from './progress.twig';
/**
 * Storybook Definition.
 */
export default {
  title: 'Bootstrap/Utilities/Progress',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=0%3A1311',
    },
  },
};

export const Progress = () => progressTwig();
