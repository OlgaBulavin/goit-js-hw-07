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
  const instance = basicLightbox.create(`
    <img src = ${event.target.dataset.source} width="800" height="600">
`,
{
  onShow: () => {
    window.addEventListener("keydown", onEscPress);
  },
  onClose: () => {
    window.removeEventListener("keydown", onEscPress);
  },
});

instance.show();

  function onEscPress(event) {
    if(event.code === "Escape")
    instance.close();
  }
});
