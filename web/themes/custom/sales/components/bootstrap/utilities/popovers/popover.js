import Popover from 'bootstrap/js/dist/popover';

document.addEventListener('DOMContentLoaded', () => {
  const popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]'),
  );
  popoverTriggerList.map((popoverTriggerEl) => {
    return new Popover(popoverTriggerEl);
  });
});
