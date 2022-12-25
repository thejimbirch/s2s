import Tooltip from 'bootstrap/js/dist/tooltip';

document.addEventListener('DOMContentLoaded', () => {
  const toolTips = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]'),
  );
  toolTips.map((tooltipEl) => {
    return new Tooltip(tooltipEl);
  });
});
