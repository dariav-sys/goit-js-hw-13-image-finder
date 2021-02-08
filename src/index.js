import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

import refs from "./js/refs.js";
import apiService from "./js/apiService.js";
import "./scss/styles.scss";

console.log(refs.searchForm);

refs.searchForm.addEventListener("submit", submitHandler);
refs.loadMoreBtn.addEventListener("click", loadButtonHandler);

let input = "";
let page = 1;

function submitHandler(event) {
  event.preventDefault();
  input = event.target[0].value;
  if (input.length === 0) {
      error({
          text: 'Wrong query.',
          delay: 2000,
        });
  } 
  refs.gallery.innerHTML = "";
  apiService.searchImages(input);
  
}

function loadButtonHandler() {
  apiService.searchImages(input, ++page);
}
