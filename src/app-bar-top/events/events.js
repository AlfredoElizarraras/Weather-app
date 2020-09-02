import { closeButton, searchButton, searchInput } from "../dom/dom";

export const closeButtonClick = (func) => {
  closeButton().addEventListener("click", func);
};

export const searchButtonClick = (func) => {
  searchButton().addEventListener("click", func);
};

export const searchInputEnterKeyDown = (func) => {
  searchInput().addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
      func();
    }
  })
};