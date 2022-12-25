import TabsTwig from './tabs.twig';
import TabsData from './tabs.yml';
import './tabs';

/**
 * Storybook Definition.
 */
export default {
  title: 'sales/Tabs',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=51%3A6805',
    },
  },
  argTypes: {
    alignment: {
      name: 'Alignment',
      description: 'Change the alignment of tabs',
      control: {
        type: 'select',
        options: [
          '',
          'justify-content-start',
          'justify-content-center',
          'justify-content-end',
          'justify-content-between',
          'justify-content-around',
          'justify-content-evenly',
        ],
      },
      defaultValue: '',
    },
  },
};

export const Tabs = ({ alignment }) => `
  ${TabsTwig({
    ...TabsData,
    alignment,
  })}
`;
