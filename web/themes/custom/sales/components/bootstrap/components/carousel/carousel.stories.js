import carouselTwig from './carousel.twig';
import carouselData from './carousel.yml';
import './carousel';

/**
 * Storybook Definition.
 */
export default {
  title: 'Bootstrap/Components/Carousel',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/kgMlJMo93cRAhUe7BuCvY1/sales-Design-System-Dark?node-id=0%3A1674',
    },
  },
  argTypes: {
    carouselControls: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
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
      defaultValue: false,
      description:
        'Add `.carousel-dark` to the .carousel for darker controls, indicators, and captions. Controls have been inverted from their default white fill with the filter CSS property. Captions and controls have additional Sass variables that customize the color and background-color.',
    },
  },
};

// Default Button
export const carousel = ({
  carouselControls,
  carouselIndicators,
  carouselCrossFade,
  carouselDarkVariant,
}) => `
  ${carouselTwig({
    ...carouselData,
    controls: carouselControls,
    indicators: carouselIndicators,
    cross_fade: carouselCrossFade,
    dark_variant: carouselDarkVariant,
  })}
`;
