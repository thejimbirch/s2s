import cardTwig from './card.twig';
import cardHorizontalTwig from './card-horizontal.twig';
import cardData from './card.yml';
/**
 * Storybook Definition.
 */
export default {
  title: 'Bootstrap/Components/Card',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=71%3A6882',
    },
  },
  argTypes: {
    cardWidth: {
      control: {
        type: 'text',
      },
      defaultValue: '24rem',
    },
    cardTitle: {
      control: {
        type: 'text',
      },
      defaultValue: cardData.title,
    },
    cardDescription: {
      control: {
        type: 'text',
      },
      defaultValue: cardData.description,
    },
    cardImageSrc: {
      control: {
        type: 'text',
      },
      defaultValue:
        'https://i.picsum.photos/id/937/536/354.jpg?hmac=tAHZdul8u0CNj1d3zwOPzclcriFQXcdVwga3SdGxHpI',
    },
    cardImageAlt: {
      control: {
        type: 'text',
      },
      defaultValue: 'Great image description',
    },
    linkStretch: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      description: 'Stretches the link to make the whole card clickable',
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
    linkText: {
      control: {
        type: 'text',
      },
      defaultValue: 'Button Text',
    },
  },
};

// Default Card
export const card = ({
  cardWidth,
  cardTitle,
  cardDescription,
  linkHref,
  linkText,
  linkTarget,
  cardImageSrc,
  cardImageAlt,
  linkStretch,
}) => `
  ${cardTwig({
    width: cardWidth,
    title: cardTitle,
    description: cardDescription,
    stretched_link: linkStretch,
    links: [
      {
        title: linkText,
        url: linkHref,
        target: linkTarget,
      },
    ],
    image: {
      src: cardImageSrc,
      alt: cardImageAlt,
    },
  })}
`;

export const cardHorizontal = ({
  cardTitle,
  cardDescription,
  cardImageSrc,
  cardImageAlt,
}) => `
  ${cardHorizontalTwig({
    title: cardTitle,
    description: cardDescription,
    url: 'https://www.salesbridgett.com/',
    image: {
      src: cardImageSrc,
      alt: cardImageAlt,
    },
  })}
`;
