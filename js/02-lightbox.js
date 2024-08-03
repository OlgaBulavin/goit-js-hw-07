import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join('');

  galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

  galleryEl.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
      return;
    }
});


  new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionSelector: 'img',
    captionDelay: 250,
  });