import Carousel from 'bootstrap/js/dist/carousel';

const carouselElementList = [].slice.call(
  document.querySelectorAll('.carousel'),
);
carouselElementList.map((carousel) => {
  return new Carousel(carousel);
});
