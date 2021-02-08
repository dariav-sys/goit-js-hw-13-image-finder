import { error } from '@pnotify/core';


import markup from './markup.js';
import refs from './refs.js';

const key = '20192058-8d48266eaed8d6a6c61b42150';
const BASE_URL = 'https://pixabay.com/api/';

export default {
  searchImages(searchQuery, page = 1) {
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${key}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.hits.length) {
          console.log(data.hits.length);
          refs.loadMoreBtn.classList.remove('is-hidden');
          
        } else {
          refs.loadMoreBtn.classList.add('is-hidden');
          error({
            text: 'Nothing has been found.',
            delay: 2000,
          });
        }
        markup(data);
        if (page > 1) {
          window.scrollTo({
            top: document.documentElement.offsetHeight,
            behavior: 'smooth',
          });
        }
      })

      .catch(err => console.log(err));
  },
};
