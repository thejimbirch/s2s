import NavTwig from './nav.twig';
import NavData from './nav.yml';
import TabsTwig from './tabs.twig';
import TabsData from './tabs.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'BootStrap/Components/Navs & Tabs',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=0%3A1489',
    },
  },
  argTypes: {
    alignment: {
      name: 'Alignment',
      description:
        'Change the alignment of your navs or tabs.  By default, navs/tabs are left-aligned, but you can easily change them to center or right aligned or vertical by adding flexbox classes.',
      control: {
        type: 'select',
        options: [
          '',
          'justify-content-start',
          'justify-content-center',
          'justify-content-end',
          'justify-content-between',
          'justify-content-around',
          'justify-content-evenly',
        ],
      },
      defaultValue: '',
    },
    disableTabbedContent: {
      name: 'Disable Tabbed Content',
      description: 'Add the class disable-tab-content to disable tab content',
    },
  },
};

export const Nav = ({ alignment }) => `
  ${NavTwig({
    ...NavData,
    extra_classes: [alignment],
  })}
`;

export const Tabs = ({ alignment, disableTabbedContent }) => `
  ${TabsTwig({
    ...TabsData,
    extra_classes: [alignment, disableTabbedContent],
  })}
`;
