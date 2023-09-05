export const mapInit = () => {
  const mapContainer = document.querySelector('.contacts__map-wrapper');
  const mapIframe = document.querySelector('.contacts__map');

  if (!mapContainer || !mapIframe) {
    return;
  } else {
    let iframe = document.querySelector('iframe');
    iframe.setAttribute('src', 'https://yandex.ru/map-widget/v1/?ll=37.630782%2C55.774836&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjczMzc2MxI80KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINC_0YDQvtGB0L_QtdC60YIg0JzQuNGA0LAsIDE00YExIgoN2ocWQhVvGV9C&z=17.13');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('frameborder', '0');

    mapIframe.classList.add('is-shown');
    mapIframe.appendChild(iframe);
  }
};
