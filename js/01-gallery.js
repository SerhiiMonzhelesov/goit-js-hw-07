import { galleryItems } from './gallery-items.js';
// Change code below this line

const markupGallery = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}).join('')

const listGallery = document.querySelector('.gallery')
listGallery.insertAdjacentHTML('afterbegin', markupGallery)

listGallery.addEventListener('click', handlerPreview)

function handlerPreview(event) {
  if (event.target === event.currentTarget) return;
  event.preventDefault();

  const urlOriginal = event.target.closest('a').getAttribute('href')

  const modalWindow = basicLightbox.create(`
    <img src="${urlOriginal}" width="800" height="600">
    `)
  
  modalWindow.show()

  document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modalWindow.close()
  }
})
}


