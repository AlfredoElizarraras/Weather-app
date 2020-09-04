import "./styles/app-bar-top.scss";
import {
  searchButtonClick,
  closeButtonClick,
  searchInputEnterKeyDown,
} from "./events/events";
import * as dom from "./dom/dom";

export const AppBarTopComponent = (() => {
  const createMarkUp = () => {
    return `
    <header id="appBarTop" class="app-bar-top">
    <h1 id="appBarTopTitle" class="app-bar-top__title">Weather app</h1>
    <button id="appBarTopSearchButton" class="app-bar-top__button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#ffffff"
        width="1.7rem"
        height="1.7rem"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        />
      </svg>
    </button>
    <input
      id="appBarTopSearchInput"
      class="app-bar-top__input d-none"
      placeholder="Search"
      maxlength="100"
    />
    <button
      id="appBarTopCloseSearch"
      class="app-bar-top__button app-bar-top__button--close d-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1.7rem"
        viewBox="0 0 24 24"
        width="1.7rem"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        />
      </svg>
    </button>
  </header>
    `;
  };

  const hideSearch = () => {
    dom.showElement(dom.searchButton());
    dom.showElement(dom.appBarTitle());
    dom.hideElement(dom.searchInput());
    dom.hideElement(dom.closeButton());
    dom.removeShadowFromBottom(dom.appBar());
  };

  const showSearch = () => {
    dom.showElement(dom.searchInput());
    dom.showElement(dom.closeButton());
    dom.hideElement(dom.searchButton());
    dom.hideElement(dom.appBarTitle());
    dom.addShadowToBottom(dom.appBar());
    dom.searchInput().focus();
  };

  const getSearchValueEvent = (func) => {
    searchInputEnterKeyDown(() => {
      func(dom.searchInput().value);
    });
  };

  const addEvents = () => {
    searchButtonClick(showSearch);
    closeButtonClick(hideSearch);
  };

  const render = (parent) => {
    parent.innerHTML += createMarkUp();
  };

  return {
    render,
    getSearchValueEvent,
    addEvents,
  };
})();
