import Masonry from 'masonry-layout';

if (document.querySelector('.masonry-collection__container')) {
  const masonrySelectorArray = [].slice.call(
    document.querySelectorAll('.masonry-collection__container'),
  );
  masonrySelectorArray.forEach((grid) => {
    /* eslint-disable no-unused-vars */
    const gridMsnry = new Masonry(grid, {
      percentPosition: true,
    });
  });
}
