import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {mainNavMenu} from './modules/main-nav';
import {heroSlider} from './modules/hero';
import {findVideo} from './modules/video';
import {upcomingToursSlider} from './modules/upcoming-tours-slider';
import {instructorsSlider} from './modules/instructors-slider';
import {reviewsSlider} from './modules/reviews-slider';
import {benefitsSlider} from './modules/benefits-slider';
import {gallerySlider} from './modules/gallery-slider';
import {mapInit} from './modules/map';
import {initAudio} from './modules/audio';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  mainNavMenu();
  heroSlider();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    // checkWindow();
    upcomingToursSlider();
    findVideo();
    initAudio();
    instructorsSlider();
    reviewsSlider();
    benefitsSlider();
    const form = new Form();
    window.form = form;
    form.init();
    gallerySlider();
    mapInit();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
