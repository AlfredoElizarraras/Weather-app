import "./styles/app-bar-top.scss";
import {
  searchButtonClick,
  closeButtonClick,
  searchInputEnterKeyDown,
} from "./events/events";
import * as dom from "./dom/dom";

export const AppBarTopComponent = (() => {
  const hideSearch = () => {
    dom.showElement(dom.searchButton);
    dom.showElement(dom.appBarTitle);
    dom.hideElement(dom.searchInput);
    dom.hideElement(dom.closeButton);
    dom.removeShadowFromBottom(dom.appBar);
  };

  const showSearch = () => {
    dom.showElement(dom.searchInput);
    dom.showElement(dom.closeButton);
    dom.hideElement(dom.searchButton);
    dom.hideElement(dom.appBarTitle);
    dom.addShadowToBottom(dom.appBar);
    dom.searchInput.focus();
  };

  const getSearchValueEvent = (func) => {
    searchInputEnterKeyDown(() => {
      func(dom.searchInput.value);
    });
  };

  const render = () => {
    searchButtonClick(showSearch);
    closeButtonClick(hideSearch);
  };

  return {
    render,
    getSearchValueEvent
  };
})();
