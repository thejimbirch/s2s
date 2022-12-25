import pageTemplateTwig from './page-template.twig';
import headerData from '../header/header.yml';
import footerData from '../footer/footer.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'sales/Templates',
  argTypes: {
    sideBarLeft: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    sideBarRight: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
};

export const pageTemplate = ({ sideBarLeft, sideBarRight }) => `
  ${pageTemplateTwig({
    header: headerData,
    side_bar_left: sideBarLeft,
    side_bar_right: sideBarRight,
    footer: footerData,
  })}
`;
