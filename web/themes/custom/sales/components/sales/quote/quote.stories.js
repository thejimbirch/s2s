import quoteTwig from './quote.twig';
import quoteData from './quote.yml';
/**
 * Storybook Definition.
 */
export default {
  title: 'sales/Quote',
  argTypes: {
    quoteText: {
      name: 'Quote',
      control: {
        type: 'text',
      },
      defaultValue: quoteData.quote,
    },
    source: {
      name: 'Source',
      control: {
        type: 'text',
      },
      defaultValue: quoteData.source,
    },
    alignment: {
      name: 'Justify Content',
      control: {
        type: 'select',
        options: ['start', 'center', 'end'],
      },
      defaultValue: 'start',
      description: 'Used to change the text align of the qoute',
      table: {
        defaultValue: { summary: 'left' },
      },
    },
  },
};

export const quote = ({ quoteText, source, alignment }) =>
  `${quoteTwig({
    quote: `<p>${quoteText}</p>`,
    source,
    alignment,
  })}`;
