import navBarTwig from './navbar.twig';
import navBarData from './navbar.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Bootstrap/Components/Navbar',
  argTypes: {
    darkmode: {
      name: 'Dark Mode',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      description: 'Dark background navigation.',
    },
    logo: {
      name: 'Logo',
      control: {
        type: 'file',
      },
      defaultValue: navBarData.logo,
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
