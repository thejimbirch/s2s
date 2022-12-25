import navBarTwig from './utility-nav.twig';
import navBarData from './utility-nav.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'sales/Utility Navigation',
  argTypes: {
    darkmode: {
      name: 'Dark Mode',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      description: 'Utility Navigation.',
    },
    menuItems: {
      name: 'Menu Items',
      control: {
        type: 'array',
      },
      defaultValue: navBarData.menu_items,
    },
  },
};

export const Navbar = ({ logo, menuItems, darkmode }) => `
  ${navBarTwig({
    ...navBarData,
    logo,
    menu_items: menuItems,
    dark_mode: darkmode,
  })}
`;
