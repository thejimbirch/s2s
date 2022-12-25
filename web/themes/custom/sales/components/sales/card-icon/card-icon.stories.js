import cardIconTwig from './card-icon.twig';
import cardIconData from './card-icon.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'sales/Card Icon',
  argTypes: {
    alignment: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
      defaultValue: cardIconData.alignment,
      description: 'Control the alignment of the Icon.',
      table: {
        defaultValue: { summary: cardIconData.alignment },
      },
    },
    headline: {
      control: {
        type: 'text',
      },
      defaultValue: cardIconData.headline,
    },
    description: {
      control: {
        type: 'text',
      },
      defaultValue: cardIconData.description,
    },
    imageSrc: {
      name: 'Image Url',
      control: {
        type: 'file',
      },
      defaultValue: cardIconData.image.src,
    },
    imageAlt: {
      name: 'Image Alt',
      control: {
        type: 'text',
      },
      defaultValue: cardIconData.image.alt,
    },
  },
};

export const cardIcon = ({
  alignment,
  headline,
  description,
  imageSrc,
  imageAlt,
}) => `
  <div class="col">
    ${cardIconTwig({
      ...cardIconData,
      alignment,
      headline,
      description,
      image: {
        src: imageSrc,
        alt: imageAlt,
      },
    })}
  </div>
`;
