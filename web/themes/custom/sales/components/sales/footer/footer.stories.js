import footerTwig from './footer.twig';
import footerData from './footer.yml';
/**
 * Storybook Definition.
 */
export default {
  title: 'sales/Footer',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    footerAddress: {
      name: 'Footer Address',
      control: {
        type: 'text',
      },
      defaultValue: footerData.footer_address,
      description:
        'Data comes from Drupal Address block found in footer region',
    },
    FootCTALinks: {
      name: 'Foot CTA Links',
      control: {
        type: 'array',
      },
      defaultValue: footerData.footer_cta_links,
      description:
        'Links are populated / controlled from the Drupal footer-cta menu',
    },
    footerMenu: {
      name: 'Footer Menu',
      control: {
        type: 'array',
      },
      defaultValue: footerData.footer_menu,
      description:
        'Links are populated / controlled from the Drupal footer menu',
    },
    footerSocialMenu: {
      name: 'Footer Social Menu',
      control: {
        type: 'array',
      },
      defaultValue: footerData.footer_social_media_links,
      description:
        'Links are populated / controlled from the Drupal social menu </br> Icons come from <a href="https://icons.getbootstrap.com/" target="_blank">Bootstrap icons library</a>',
    },
    footerLegalMenu: {
      name: 'Footer Legal Menu',
      control: {
        type: 'array',
      },
      defaultValue: footerData.footer_legal_menu,
      description:
        'Links are populated / controlled from the Drupal legal menu.',
    },
  },
};

export const footer = ({
  footerAddress,
  FootCTALinks,
  FooterMenu,
  footerSocialMenu,
  footerLegalMenu,
}) => `
  ${footerTwig({
    ...footerData,
    footer_address: footerAddress,
    footer_cta_links: FootCTALinks,
    footer_menu: FooterMenu,
    footer_social_media_links: footerSocialMenu,
    footer_legal_menu: footerLegalMenu,
  })}
`;
