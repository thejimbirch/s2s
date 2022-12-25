import offCanvasTwig from './offcanvas.twig';
import offCanvasData from './offcanvas.yml';
// Offcanvas js import to Storybook.
import './offcanvas';

/**
 * Storybook Definition.
 */
export default {
  title: 'BootStrap/Components/OffCanvas',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=0%3A1435',
    },
  },
  argTypes: {
    id: {
      description:
        'Unique id used to trigger offcanvas element. This is required',
      control: {
        type: 'text',
      },
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: offCanvasData.id,
    },
    ButtonTitle: {
      description: 'Button Title. This is required.',
      control: {
        type: 'text',
      },
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: offCanvasData.button_text,
    },
    offCanvasHeader: {
      control: {
        type: 'text',
      },
      defaultValue: offCanvasData.offcanvas_header,
    },
    offCanvasBody: {
      control: {
        type: 'text',
      },
      defaultValue: offCanvasData.offcanvas_body,
    },
    placement: {
      name: 'Placement',
      description: 'Change the placement of the offcanvas',
      control: {
        type: 'select',
        options: [
          'offcanvas-start',
          'offcanvas-end',
          'offcanvas-top',
          'offcanvas-bottom',
        ],
      },
      defaultValue: 'offcanvas-start',
      table: {
        defaultValue: { summary: 'offcanvas-start' },
      },
    },
  },
};

export const offCanvas = ({
  id,
  ButtonTitle,
  offCanvasHeader,
  offCanvasBody,
  placement,
}) => `
  ${offCanvasTwig({
    id,
    offcanvas_placement_class: placement,
    button_text: ButtonTitle,
    offcanvas_header: offCanvasHeader,
    offcanvas_body: offCanvasBody,
  })}
`;
