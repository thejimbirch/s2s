import siteBrandingTwig from './site-branding.twig';
/**
 * Storybook Definition.
 */
export default {
  title: 'sales/Site Branding',
  parameters: {
    backgrounds: {
      default: 'black',
    },
  },
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
      defaultValue: '#FFFFFF',
      table: {
        defaultValue: { summary: '#FFFFFF' },
      },
    },
  },
};

export const siteBranding = ({ color }) => `
  <div class="container">
    ${siteBrandingTwig({ color })}
  </div>
`;
