import Alert from 'bootstrap/js/dist/alert';

const alertElementList = [].slice.call(document.querySelectorAll('.alert'));
alertElementList.map((alertEl) => {
  return new Alert(alertEl);
});
