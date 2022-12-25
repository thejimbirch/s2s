import Modal from 'bootstrap/js/dist/modal';

const modalElementList = [].slice.call(document.querySelectorAll('.modal'));
modalElementList.map((carousel) => {
  return new Modal(carousel);
});
