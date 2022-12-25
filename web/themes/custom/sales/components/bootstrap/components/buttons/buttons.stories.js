// Buttons Stories
import buttonTwig from './button.twig';
import buttonExtrasTwig from './button-extras.twig';

/**
 * Storybook Definition.
 */

export default {
  title: 'Bootstrap/Components/Buttons',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=0%3A1830',
    },
  },
  component: 'Button',
  argTypes: {
    buttonVariations: {
      control: {
        type: 'select',
        options: [
          'btn-primary',
          'btn-secondary',
          'btn-success',
          'btn-danger',
          'btn-warning',
          'btn-info',
          'btn-light',
          'btn-dark',
          'btn-white',
          'btn-outline-primary',
          'btn-outline-secondary',
          'btn-outline-success',
          'btn-outline-danger',
          'btn-outline-warning',
          'btn-outline-info',
          'btn-outline-light',
          'btn-outline-dark',
          'btn-outline-white',
        ],
      },
      defaultValue: 'btn-primary',
    },
    buttonActive: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    buttonSize: {
      control: {
        type: 'radio',
        options: ['btn-sm', 'btn-lg'],
      },
      defaultValue: '',
    },
    buttonText: {
      control: {
        type: 'text',
      },
      defaultValue: 'Button Text',
    },
    buttonId: {
      control: {
        type: 'text',
      },
    },
    linkHref: {
      control: {
        type: 'text',
      },
      defaultValue: 'https://www.salesbridgett.com/',
    },
    linkTarget: {
      control: {
        type: 'radio',
        options: ['_blank', '_self'],
      },
      defaultValue: '_blank',
    },
    extraAttribute: {
      control: {
        type: 'object',
      },
      defaultValue: '{"aria-label": "hello me"}',
    },
  },
};

// Default Button
export const button = ({
  buttonSize,
  buttonVariations,
  buttonActive,
  buttonText,
  buttonId,
}) => `
  ${buttonTwig({
    id: buttonId,
    variation: buttonVariations,
    active: buttonActive,
    size: buttonSize,
    title: buttonText,
  })}
`;

export const link = ({
  buttonSize,
  buttonVariations,
  buttonActive,
  buttonText,
  buttonId,
  linkHref,
  linkTarget,
}) => `
  ${buttonTwig({
    id: buttonId,
    url: linkHref,
    target: linkTarget,
    variation: buttonVariations,
    active: buttonActive,
    size: buttonSize,
    title: buttonText,
  })}
`;

export const buttonExtras = ({
  buttonSize,
  buttonVariations,
  buttonText,
  buttonId,
  extraAttribute,
}) => `
  ${buttonExtrasTwig({
    button_extra_classes: [buttonVariations, buttonSize],
    button_extra_attributes: {
      id: buttonId || '',
      ...extraAttribute,
    },
    title: buttonText,
  })}
`;

button.argTypes = {
  linkHref: { table: { disable: true } },
  linkTarget: { table: { disable: true } },
};
buttonExtras.argTypes = {
  linkHref: { table: { disable: true } },
  linkTarget: { table: { disable: true } },
};
