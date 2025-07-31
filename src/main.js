
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({ message: 'Please enter a search term.', position: 'topRight' });
    return;
  }

  clearGallery();

  showLoader();

  try {
    const data = await getImagesByQuery(query);
    const { hits } = data;

    if (hits.length === 0) {
      iziToast.info({ message:'Sorry, there are no images matching your search query. Please try again!', position: 'topRight' });
    } else {
      createGallery(hits);
    }
  } catch (error) {
    iziToast.error({ message: 'Something went wrong. Please try again later.', position: 'topRight' });
  } finally {
    hideLoader();
  }
});

const input = document.querySelector('.input');

input.addEventListener('input', () => {
  if (input.value.trim() !== '') {
    input.classList.add('has-text');
  } else {
    input.classList.remove('has-text');
  }
});