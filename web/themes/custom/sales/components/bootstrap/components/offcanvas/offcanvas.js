import Offcanvas from 'bootstrap/js/dist/offcanvas';

const offcanvasElementList = [].slice.call(
  document.querySelectorAll('.offcanvas'),
);
offcanvasElementList.map((offcanvasEl) => {
  return new Offcanvas(offcanvasEl);
});
