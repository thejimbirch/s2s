import accordionTwig from './accordion.twig';
import accordionData from './accordion.yml';
import '../collapse/collapse';

/**
 * Storybook Definition.
 */
export default {
  title: 'Bootstrap/Components/Accordion',
  argTypes: {
    flush: {
      control: {
        type: 'boolean',
      },
      description:
        'Add .accordion-flush to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.',
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
    alwaysOpen: {
      control: {
        type: 'boolean',
      },
      name: 'Always Open',
      description:
        'Passing `always_open: true` to the individual accordion will force it open. Passing `always_open: false` will force it closed. This control will toggle all accordions between open and closed.',
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
  },
};

export const accordions = ({ flush, alwaysOpen }) => `
  <div class="container">
    ${accordionTwig({
      flush,
      items: [
        {
          ...accordionData.items[0],
          always_open: alwaysOpen,
        },
        {
          ...accordionData.items[1],
          always_open: alwaysOpen,
        },
        {
          ...accordionData.items[2],
          always_open: alwaysOpen,
        },
      ],
    })}
  </div>
`;
