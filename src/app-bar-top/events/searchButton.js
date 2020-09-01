import * as dom from "../dom/dom";

export const addClickEvent = () => {
  dom.searchButton.addEventListener("click", () => {
    dom.hideElement(dom.searchButton);
    dom.hideElement(dom.appBarTitle);
    dom.showElement(dom.searchInput);
    dom.showElement(dom.closeButton);
  });
};
