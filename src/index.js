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
  refs.gallery.innerHTML = "";
  apiService.searchImages(input);
  refs.loadMoreBtn.classList.remove("is-hidden");
}

function loadButtonHandler(event) {
  apiService.searchImages(input, ++page);
}
