export const appBar = () => document.querySelector('#appBarTop');
export const searchButton = () => document.querySelector('#appBarTopSearchButton');
export const closeButton = () => document.querySelector('#appBarTopCloseSearch')
export const searchInput = () => document.querySelector('#appBarTopSearchInput');
export const appBarTitle = () => document.querySelector('#appBarTopTitle');

export const showElement = (element) => {
  element.classList.remove('d-none');
};

export const hideElement = (element) => {
  element.classList.add('d-none');
};

export const addShadowToBottom = (element) => {
  element.classList.add('app-bar-top--shadow');
};

export const removeShadowFromBottom = (element) => {
  element.classList.remove('app-bar-top--shadow');
};
