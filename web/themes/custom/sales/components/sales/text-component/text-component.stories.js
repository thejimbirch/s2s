import textComponentTwig from './text-component.twig';
import textComponentData from './text-component.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'sales/Text Component',
  argTypes: {
    heading: {
      control: {
        type: 'text',
      },
      defaultValue: textComponentData.heading,
    },
    description: {
      control: {
        type: 'text',
      },
      defaultValue: textComponentData.description,
    },
  },
};

export const textComponent = ({ heading, description }) =>
  `${textComponentTwig({ heading, description })}`;
