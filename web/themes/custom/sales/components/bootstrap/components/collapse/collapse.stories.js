import collapseTwig from './collapse.twig';
import collapseData from './collapse.yml';
import './collapse';

/**
 * Storybook Definition.
 */
export default {
  title: 'Bootstrap/Components/Collapse',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=387%3A8125',
    },
  },
  argTypes: {
    collapseHorizontal: {
      control: {
        type: 'boolean',
      },
      name: 'Collapse horizontal',
      defaultValue: false,
      description: 'Collapse horizontal collapsing.',
      table: {
        defaultValue: { summary: false },
      },
    },
    collapseHorizotalWidth: {
      control: {
        type: 'number',
      },
      defaultValue: 300,
      name: 'Collapse Width',
      description:
        'Width is required when collapse horizontal is true. Default is 300px',
      table: {
        defaultValue: { summary: '300px' },
      },
    },
  },
};

// Default Button
export const collapse = ({ collapseHorizontal, collapseHorizotalWidth }) => `
  ${collapseTwig({
    ...collapseData,
    collapse_horizontal: collapseHorizontal,
    collapse_width: `${collapseHorizotalWidth}px`,
  })}
`;
