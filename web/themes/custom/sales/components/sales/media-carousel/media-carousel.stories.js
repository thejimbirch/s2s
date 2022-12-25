import carouselTwig from './media-carousel.twig';
import carouselData from './media-carousel.yml';
import './media-carousel';

/**
 * Storybook Definition.
 */
export default {
  title: 'sales/Media Carousel',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=0%3A1674',
    },
  },
  argTypes: {
    carouselIndicators: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    carouselCrossFade: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      description:
        'Add `.carousel-fade` to your carousel to animate slides with a fade transition instead of a slide.',
    },
    carouselDarkVariant: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
      description:
        'Add `.carousel-dark` to the .carousel for darker controls, indicators, and captions. Controls have been inverted from their default white fill with the filter CSS property. Captions and controls have additional Sass variables that customize the color and background-color.',
    },
  },
};

// Default Button
export const carousel = ({
  carouselIndicators,
  carouselCrossFade,
  carouselDarkVariant,
}) => `
  ${carouselTwig({
    ...carouselData,
    indicators: carouselIndicators,
    cross_fade: carouselCrossFade,
    dark_variant: carouselDarkVariant,
  })}
`;
