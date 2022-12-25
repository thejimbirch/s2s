import Collapse from 'bootstrap/js/dist/collapse';

const collapseElementList = [].slice.call(
  document.querySelectorAll('.collapse'),
);
collapseElementList.map((collapse) => {
  return new Collapse(collapse, {
    toggle: false,
  });
});
