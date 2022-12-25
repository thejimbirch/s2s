import headerTwig from './header.twig';
import headerData from './header.yml';
import './header';
/**
 * Storybook Definition.
 */
export default {
  title: 'sales/Header',
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=31%3A6460',
    },
  },
  argTypes: {
    menuItems: {
      name: 'Menu Items',
      control: {
        type: 'array',
      },
      defaultValue: headerData.menu_items,
      description: 'Links are populated and controlled from Drupal main menu.',
    },
  },
};

export const header = ({ menuItems }) =>
  `${headerTwig({ ...headerData, menu_items: menuItems })}`;
