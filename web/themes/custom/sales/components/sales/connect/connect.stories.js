import connectTwig from './connect.twig';
import connectData from './connect.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'sales/Connect',
  argTypes: {
    type: {
      description: 'Change icon type',
      control: {
        type: 'select',
        options: [
          '',
          'email',
          'facebook',
          'instagram',
          'twitter',
          'youtube',
          'news',
        ],
      },
      defaultValue: 'email',
    },
    text: {
      control: {
        type: 'text',
      },
      defaultValue: connectData.text,
    },
    link: {
      control: {
        type: 'text',
      },
      defaultValue: connectData.link,
    },
  },
};

export const connect = ({ type, text, link }) => `
  ${connectTwig({
    ...connectData,
    type,
    text,
    link,
  })}
`;
