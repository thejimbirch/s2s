import toastTwig from './toast.twig';
import toastData from './toast.yml';
import './toast';

/**
 * Storybook Definition.
 */
export default {
  title: 'Bootstrap/Utilities/Toast',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=0%3A1153',
    },
  },
  argTypes: {
    show: {
      control: {
        type: 'boolean',
      },
      defaultValue: toastData.show,
    },
    header: {
      control: {
        type: 'text',
      },
      defaultValue: toastData.header,
    },
    body: {
      control: {
        type: 'text',
      },
      defaultValue: toastData.body,
    },
    position: {
      control: {
        type: 'select',
        options: {
          'Top Left': 'top-0 start-0',
          'Top center': 'top-0 start-50 translate-middle-x',
          'Top right': 'top-0 end-0',
          'Middle Left': 'top-50 start-0 translate-middle-y',
          'Middle center': 'top-50 start-50 translate-middle',
          'Middle right': 'top-50 end-0 translate-middle-y',
          'Bottom left': 'bottom-0 start-0',
          'Bottom center': 'bottom-0 start-50 translate-middle-x',
          'Bottom right': 'bottom-0 end-0',
        },
      },
      defaultValue: 'btn-primary',
    },
  },
};

export const toast = ({ show, header, body, position }) => `
  ${toastTwig({
    show,
    header,
    body,
    position,
  })}
`;
