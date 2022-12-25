import columnsTwig from './columns.twig';
import columnsData from './columns.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'sales/Columns',
  argTypes: {
    heading: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    numberOfColumns: {
      control: {
        type: 'number',
      },
      defaultValue: '8',
      description: 'Used just in Storybook to give control of columns',
      table: {
        defaultValue: { summary: '8' },
      },
    },
    desktop: {
      name: 'Desktop Number of columns',
      control: {
        type: 'select',
        options: ['6', '5', '4', '3', '2', '1'],
      },
      defaultValue: '3',
      description:
        'Used to control the number of columns displayed on Tablet (screens ≥992px)',
      table: {
        defaultValue: { summary: '3' },
      },
    },
    tablet: {
      name: 'Tablet Number of columns',
      control: {
        type: 'select',
        options: ['6', '5', '4', '3', '2', '1'],
      },
      defaultValue: '3',
      description:
        'Used to control the number of columns displayed on Tablet (screens ≥768px)',
      table: {
        defaultValue: { summary: '2' },
      },
    },
    mobile: {
      name: 'Mobile Number of columns',
      control: {
        type: 'select',
        options: ['6', '5', '4', '3', '2', '1'],
      },
      defaultValue: '3',
      description:
        'Used to control the number of columns displayed on Mobile (screens ≥576px)',
      table: {
        defaultValue: { summary: '1' },
      },
    },
    justifyContent: {
      name: 'Justify Content',
      control: {
        type: 'select',
        options: [
          'justify-content-start',
          'justify-content-end',
          'justify-content-center',
          'justify-content-between',
          'justify-content-around',
          'justify-content-evenly',
        ],
      },
      defaultValue: 'justify-content-start',
      description: 'Used to change the alignment of the columns.',
      table: {
        defaultValue: { summary: 'justify-content-start' },
      },
    },
    gutter: {
      name: 'Gutter',
      control: {
        type: 'select',
        options: ['5', '4', '3', '2', '1', '0'],
      },
      defaultValue: '4',
      description:
        'Used to control the space between columns. <br>The larger the number the bigger the space between.',
      table: {
        defaultValue: { summary: '4' },
      },
    },
  },
};

export const Columns = ({
  heading,
  description,
  numberOfColumns,
  desktop,
  tablet,
  mobile,
  justifyContent,
  gutter,
}) => `
  ${columnsTwig({
    ...columnsData,
    heading,
    description,
    numberOfColumns,
    desktop,
    tablet,
    mobile,
    justify_content: justifyContent,
    gutter,
  })}
`;
