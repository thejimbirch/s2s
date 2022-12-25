// document.addEventListener('DOMContentLoaded', () => {
//   if (document.getElementById('mobile-menu-button')) {
//     const body = document.querySelector('body');
//     const header = document.querySelector('.header');
//     let headerHeight = header.offsetHeight;
//     const mobileMenuToggle = document.getElementById('mobile-menu-button');
//     const mobileMenuContainer = document.getElementById('navbar-menu');
//     const menuOverlay = document.querySelector('.mobile-overlay');
//     mobileMenuContainer.style.top = `${headerHeight}px`;
//     // Hamburger Button.
//     mobileMenuToggle.addEventListener('click', () => {
//       headerHeight = header.offsetHeight;
//       mobileMenuContainer.style.top = `${headerHeight}px`;
//       if (body.classList.contains('toolbar-fixed')) {
//         mobileMenuContainer.style.top = `${headerHeight + 39}px`;
//       }
//       mobileMenuContainer.classList.toggle('open');
//       body.classList.toggle('mobile-menu-active');
//       mobileMenuToggle.classList.toggle('navbar-toggler--active');
//     });
//     // Menu Overlay.
//     menuOverlay.addEventListener('click', () => {
//       if (body.classList.contains('mobile-menu-active')) {
//         mobileMenuContainer.classList.remove('open');
//         body.classList.remove('mobile-menu-active');
//         mobileMenuToggle.classList.remove('navbar-toggler--active');
//       }
//     });

//     // Close on ESC Close.
//     document.addEventListener('keydown', (e) => {
//       if (!body.classList.contains('mobile-menu-active')) return;
//       if (e.key === 'Escape') {
//         mobileMenuContainer.classList.remove('open');
//         body.classList.remove('mobile-menu-active');
//         mobileMenuToggle.classList.remove('navbar-toggler--active');
//       }
//     });
//   }
// });
