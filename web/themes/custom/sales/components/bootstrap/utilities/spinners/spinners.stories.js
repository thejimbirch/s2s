import spinnersTwig from './spinners.twig';
/**
 * Storybook Definition.
 */
export default {
  title: 'Bootstrap/Utilities/Spinners',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=0%3A1264',
    },
  },
  argTypes: {
    animation: {
      description: 'Spinner Animation',
      control: {
        type: 'select',
        options: ['border', 'grow'],
      },
      defaultValue: 'border',
      table: {
        defaultValue: { summary: 'border' },
      },
    },
    variant: {
      description: 'Spinner Variant',
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
        ],
      },
    },
  },
};

export const spinners = ({ variant, animation }) => `
  ${spinnersTwig({
    variant,
    animation,
  })}
`;
