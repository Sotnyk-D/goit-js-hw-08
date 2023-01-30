// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// console.log(galleryItems);
console.log(SimpleLightbox);

const galleryRef = document.querySelector('.gallery');
console.log(galleryRef);
const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    `;
  })
  .join('');

galleryRef.insertAdjacentHTML('beforeend', markup);

let gallery = new SimpleLightbox('.gallery a', {
  captionPosition: 'button',
  captionData: 'alt',
  captionDelay: 250,
});
// gallery.on('show.simplelightbox');
