const header = document.querySelector('.header');
const mainNav = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav__toggle');
const body = document.querySelector('body');
const mainNavLinks = document.querySelectorAll('.main-nav__link');
const overlay = document.querySelector('.main-nav__overlay');
const heroSlider = document.querySelector('.hero__slider');
export const mainNavMenu = () => {
  const initMenu = () => {
    mainNav.classList.remove('main-nav--nojs');
    heroSlider.classList.remove('hero__slider--nojs');
    header.classList.add('header--main-nav-closed');
    mainNav.classList.add('main-nav--closed');
  };

  const checkWindow = () => {
    if (mainNav.classList.contains('main-nav--nojs')) {
      return;
    } else {
      window.addEventListener('resize', () => {
        if (window.innerWidth > 1200) {
          closeModal();
        }
      });
    }
  };

  const toggleHandlerNav = () => {
    mainNavLinks.forEach((link) => link.addEventListener('click', closeModal));

    mainNavToggle.addEventListener('click', () => {
      if (header.classList.contains('header--main-nav-closed') && mainNav.classList.contains('main-nav--closed')) {
        header.classList.remove('header--main-nav-closed');
        header.classList.add('header--main-nav-opened');
        mainNav.classList.remove('main-nav--closed');
        mainNav.classList.add('main-nav--opened');
        body.classList.add('scroll-lock');
        overlay.classList.add('main-nav__overlay--active');
        document.addEventListener('click', onOverlayClick);
      } else {
        closeModal();
        document.removeEventListener('click', onOverlayClick);
      }
    });
  };

  const closeModal = () => {
    header.classList.add('header--main-nav-closed');
    header.classList.remove('header--main-nav-opened');
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
    body.classList.remove('scroll-lock');
    overlay.classList.remove('main-nav__overlay--active');
  };

  const onOverlayClick = (evt) => {
    if (evt.target === overlay) {
      closeModal();
    }
  };
  initMenu();
  checkWindow();
  toggleHandlerNav();
};

// export const initMenu = () => {
//   mainNav.classList.remove('main-nav--nojs');
//   heroSlider.classList.remove('hero__slider--nojs');
//   header.classList.add('header--main-nav-closed');
//   mainNav.classList.add('main-nav--closed');
// };

// export const checkWindow = () => {
//   if (mainNav.classList.contains('main-nav--nojs')) {
//     return;
//   } else {
//     window.addEventListener('resize', () => {
//       if (window.innerWidth > 1200) {
//         closeModal();
//       }
//     });
//   }
// };

// export const toggleHandlerNav = () => {
//   mainNavLinks.forEach((link) => link.addEventListener('click', closeModal));

//   mainNavToggle.addEventListener('click', () => {
//     if (header.classList.contains('header--main-nav-closed') && mainNav.classList.contains('main-nav--closed')) {
//       header.classList.remove('header--main-nav-closed');
//       header.classList.add('header--main-nav-opened');
//       mainNav.classList.remove('main-nav--closed');
//       mainNav.classList.add('main-nav--opened');
//       body.classList.add('scroll-lock');
//       overlay.classList.add('main-nav__overlay--active');
//       document.addEventListener('click', onOverlayClick);
//     } else {
//       closeModal();
//       document.removeEventListener('click', onOverlayClick);
//     }
//   });
// };

// const closeModal = () => {
//   header.classList.add('header--main-nav-closed');
//   header.classList.remove('header--main-nav-opened');
//   mainNav.classList.add('main-nav--closed');
//   mainNav.classList.remove('main-nav--opened');
//   body.classList.remove('scroll-lock');
//   overlay.classList.remove('main-nav__overlay--active');
// };

// const onOverlayClick = (evt) => {
//   if (evt.target === overlay) {
//     closeModal();
//   }
// };
