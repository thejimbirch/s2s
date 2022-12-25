// Alert Twig for SB.
import alertsTwig from './alerts.twig';
// Alert JS import for SB.
import './alerts';
/**
 * Storybook Definition.
 */
export default {
  title: 'Bootstrap/Components/Alerts',
};

export const alertExmples = () => `
  ${alertsTwig({
    alert_type: 'primary',
    alert_body: '<p>This is a primary alert—check it out!</p>',
  })}
  ${alertsTwig({
    alert_type: 'secondary',
    alert_body: '<p>This is a secondary alert—check it out!</p>',
  })}
  ${alertsTwig({
    alert_type: 'success',
    alert_body: '<p>This is a success alert—check it out!</p>',
  })}
  ${alertsTwig({
    alert_type: 'danger',
    alert_body: '<p>This is a danger alert—check it out!</p>',
  })}
  ${alertsTwig({
    alert_type: 'warning',
    alert_body: '<p>This is a warning alert—check it out!</p>',
  })}
  ${alertsTwig({
    alert_type: 'info',
    alert_body: '<p>This is a info alert—check it out!</p>',
  })}
  ${alertsTwig({
    alert_type: 'light',
    alert_body: '<p>This is a light alert—check it out!</p>',
  })}
  ${alertsTwig({
    alert_type: 'dark',
    alert_body: '<p>This is a dark alert—check it out!</p>',
  })}
`;

export const alertLinks = () => `
  ${alertsTwig({
    alert_type: 'primary',
    alert_body:
      '<p>A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</p>',
  })}
  ${alertsTwig({
    alert_type: 'secondary',
    alert_body:
      '<p>A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</p>',
  })}
  ${alertsTwig({
    alert_type: 'success',
    alert_body:
      '<p>A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</p>',
  })}
  ${alertsTwig({
    alert_type: 'danger',
    alert_body:
      '<p>A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</p>',
  })}
  ${alertsTwig({
    alert_type: 'warning',
    alert_body:
      '<p>A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</p>',
  })}
  ${alertsTwig({
    alert_type: 'info',
    alert_body:
      '<p>A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</p>',
  })}
  ${alertsTwig({
    alert_type: 'light',
    alert_body:
      '<p>A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</p>',
  })}
  ${alertsTwig({
    alert_type: 'dark',
    alert_body:
      '<p>A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</p>',
  })}
`;

export const alertDismissError = () => `
  ${alertsTwig({
    alert_type: 'danger',
    alert_dismissible: true,
    alert_heading: 'Oh snap! You got an error!',
    alert_body:
      '<p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>',
  })}
`;

export const alertDismissSuccess = () => `
  ${alertsTwig({
    alert_type: 'success',
    alert_dismissible: true,
    alert_heading: "How's it going?!",
    alert_body:
      '<p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>',
  })}
`;
