import lozad from 'lozad';

const observer = lozad('.lozad', {
  loaded: function (el) {
    if (el.classList.contains('placeholder')) {
      el.classList.remove('placeholder');
      el.classList.remove('placeholder-glow');
    }
  },
});

observer.observe();
