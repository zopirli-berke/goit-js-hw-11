import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// Fetch API importu
import { fetchimages } from './fetchimages';

// DOM elementleri
const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery-list');
const loader = document.querySelector('#loader');

const lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const searchQuery = event.target.elements.searchQuery.value.trim();

  gallery.innerHTML = '';

  if (!searchQuery) return;

  gallery.innerHTML = '';
  loader.classList.remove('hidden');
  try {
    const images = await fetchimages(searchQuery);
    if (!searchQuery) {
      iziToast.info({
        title: 'No images found',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#ffff',
        messageColor: '#fff',
        progressBarColor: '#B51B1B',
      });
    } else {
      const markup = images.map(createImage).join('');
      gallery.innerHTML = markup;
      lightbox.refresh();
    }
  } catch (error) {
    iziToast.error({
      title: 'No images found',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      backgroundColor: '#EF4040',
      messageColor: '#fff',
      progressBarColor: '#B51B1B',
      timeout: 3000,
    });
  } finally {
    loader.classList.add('hidden');
  }
});

function createImage(img) {
  return `
  <li class="image-card">
      <a href="${img.largeImageURL}">
        <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
        <div class="info">
          <p><b>Likes</b> ${img.likes}</p>
          <p><b>Views</b> ${img.views}</p>
          <p><b>Comments</b> ${img.comments}</p>
          <p><b>Downloads</b> ${img.downloads}</p>
        </div>
      </a>
      </li>
    `;
}
