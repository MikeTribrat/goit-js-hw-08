// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../sass/main.scss';

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
let instance;

// creates img container
const createGalleryItem = ({ preview, original, description }) => {
  const resultLink = document.createElement('a');
  resultLink.classList.add('gallery__item');
  resultLink.href = original;

  const galleryItem = `<img class="gallery__image" src="${preview}" alt="${description}"/>`;
  resultLink.insertAdjacentHTML('afterbegin', galleryItem);
  return resultLink;
};

// render all galleries items
galleryRef.append(...galleryItems.map(i => createGalleryItem(i)));

var lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 1,
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});