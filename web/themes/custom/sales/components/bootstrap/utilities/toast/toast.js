import Toast from 'bootstrap/js/dist/toast';

const toastElList = [].slice.call(document.querySelectorAll('.toast'));
toastElList.map((toastEl) => {
  return new Toast(toastEl);
});
