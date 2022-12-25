import modalTwig from './modal.twig';
import modalData from './modal.yml';
import './modal';

/**
 * Storybook Definition.
 */
export default {
  title: 'Bootstrap/Components/Modal',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=387%3A8226',
    },
  },
  argTypes: {
    closeModal: {
      name: 'Hit esc to close the modal',
    },
    modalButtontext: {
      name: 'Modal Button Text',
      control: {
        type: 'text',
      },
      type: {
        name: 'string',
        required: true,
      },
      description: 'This is a requied prop. Used to label the modal button',
      defaultValue: modalData.modal_button_text,
    },
    modalTitle: {
      name: 'Modal Title',
      control: {
        type: 'text',
      },
      type: {
        name: 'string',
        required: true,
      },
      description:
        'This is a required prop. Used to give the modal a headline and unique id ',
      defaultValue: modalData.title,
    },
    modalBody: {
      name: 'Modal Body Content',
      control: {
        type: 'text',
      },
      type: {
        name: 'string',
        required: false,
      },
      description:
        'This is an optional field. Used to populate the modal body.',
      defaultValue: modalData.body,
    },
    fullScreen: {
      name: 'Fullscreen Modal',
      control: {
        type: 'boolean',
      },
      description:
        'Add the class `.modal-fullscreen` to cover the users viewport',
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
  },
};

export const modal = ({ fullScreen, modalButtontext, modalBody }) => `
  ${modalTwig({
    ...modalData,
    full_screen: fullScreen,
    modal_button_text: modalButtontext,
    body: modalBody,
  })}
`;
