import Dropdown from 'bootstrap/js/dist/dropdown';

const dropdownElementList = [].slice.call(
  document.querySelectorAll('.dropdown-toggle'),
);
dropdownElementList.map((dropdownToggleEl) => {
  return new Dropdown(dropdownToggleEl);
});
