import PhotoSwipeLightbox from '/static/js/photoswipe@5.3.0/dist/photoswipe-lightbox.esm.js';
import PhotoSwipe from '/static/js/photoswipe@5.3.0/dist/photoswipe.esm.js';
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const lightbox = new PhotoSwipeLightbox({
  //bgOpacity: isMobile ? 0.0 : 1.0,
  bgOpacity: 0.0,
  mainClass: 'pswp-custom-bg',
  //gallerySelector: '.pswp-gallery',
  gallerySelector: '.main',
  childSelector: '.pswp-gallery-item',
  pswpModule: PhotoSwipe,
  //pswpModule: () => import('https://unpkg.com/photoswipe'),
  loop: true,
});

var lightbox_last_element = null;
var lightbox_first_element = null;

lightbox.on('contentActivate', ({content}) => {
  //console.log('content =', content);
  if (lightbox_first_element == null) lightbox_first_element = content.data.element;
  lightbox_last_element = content.data.element;
  if (lightbox_last_element && (lightbox_last_element !== lightbox_first_element)) lightbox_last_element.scrollIntoView({ block: "center" });
});

lightbox.on('destroy', () => {
  //console.log('lightbox_last_element =', lightbox_last_element);
  //if (lightbox_last_element && (lightbox_last_element !== lightbox_first_element)) lightbox_last_element.scrollIntoView({ block: "center" });
  if (lightbox_first_element) lightbox_first_element = null;
});

lightbox.on('uiRegister', function() {
  lightbox.pswp.ui.registerElement({
    name: 'custom-caption',
    order: 9,
    isButton: false,
    appendTo: 'root',
    html: 'Caption text',
    onInit: (el, pswp) => {
      lightbox.pswp.on('change', () => {
        const currSlideElement = lightbox.pswp.currSlide.data.element;
        let captionHTML = '';
        if (currSlideElement) {
          const hiddenCaption = currSlideElement.querySelector('.hidden-caption-content');
          if (hiddenCaption) {
            // get caption from element with class hidden-caption-content
            captionHTML = hiddenCaption.innerHTML;
          } else {
            // get caption from alt attribute
            captionHTML = currSlideElement.querySelector('img').getAttribute('alt');
          }
        }
        el.innerHTML = captionHTML || '';
      });
    }
  });
});

lightbox.init();
