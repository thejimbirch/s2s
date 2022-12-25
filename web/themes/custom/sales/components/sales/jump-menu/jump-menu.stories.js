import jumpMenuComponentTwig from './jump-menu.twig';
import jumpMenuComponentData from './jump-menu.yml';
/**
 * Storybook Definition.
 */
export default {
  title: 'sales/Jump Menu',
  argTypes: {
    items: {
      name: 'items',
      control: {
        type: 'array',
      },
      defaultValue: jumpMenuComponentData.items,
    },
    alignment: {
      name: 'Justify Content',
      control: {
        type: 'select',
        options: [
          'justify-content-start',
          'justify-content-end',
          'justify-content-center',
          'justify-content-between',
          'justify-content-around',
          'justify-content-evenly',
        ],
      },
      defaultValue: 'justify-content-start',
      description: 'Used to change the alignment of the menu.',
      table: {
        defaultValue: { summary: 'justify-content-start' },
      },
    },
  },
};

export const jumpMenu = ({ items, alignment }) =>
  `${jumpMenuComponentTwig({
    items,
    alignment,
  })}`;
