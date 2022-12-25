import tooltipsTwig from './tooltips.twig';
import tooltipsData from './tooltips.yml';
import './tooltips';

/**
 * Storybook Definition.
 */
export default {
  title: 'Bootstrap/Utilities/Tool Tips',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=0%3A1221',
    },
  },
  argTypes: {
    refresh: {
      name:
        'You may need to navigate to another component and back to trigger tooltips to work in Stroybook.',
    },
  },
};

export const toolTips = () => `
  ${tooltipsTwig({
    ...tooltipsData,
  })}
`;
