import badgeTiwg from './badge.twig';
/**
 * Storybook Definition.
 */
export default {
  title: 'Bootstrap/Utilities/Badge',
  argTypes: {
    badgeRounded: {
      control: {
        type: 'boolean',
      },
      description:
        'Use the .rounded-pill utility class to make badges more rounded with a larger border-radius',
      defaultValue: false,
      name: 'Rounded Pills',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
};

export const badge = ({ badgeRounded }) => `
  ${badgeTiwg({
    badge_title: 'primary',
    badge_type: 'primary',
    badge_rounded: badgeRounded,
  })}
  ${badgeTiwg({
    badge_title: 'secondary',
    badge_type: 'secondary',
    badge_rounded: badgeRounded,
  })}
  ${badgeTiwg({
    badge_title: 'success',
    badge_type: 'success',
    badge_rounded: badgeRounded,
  })}
  ${badgeTiwg({
    badge_title: 'danger',
    badge_type: 'danger',
    badge_rounded: badgeRounded,
  })}
  ${badgeTiwg({
    badge_title: 'warning',
    badge_type: 'warning',
    badge_rounded: badgeRounded,
  })}
  ${badgeTiwg({
    badge_title: 'info',
    badge_type: 'info',
    badge_rounded: badgeRounded,
  })}
  ${badgeTiwg({
    badge_title: 'dark',
    badge_type: 'dark',
    badge_rounded: badgeRounded,
  })}
  ${badgeTiwg({
    badge_title: 'light',
    badge_type: 'light',
    badge_rounded: badgeRounded,
  })}
`;
