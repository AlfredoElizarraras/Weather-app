import * as dom from "../dom/dom";

export const addClickEventToSearchButton = () => {
  dom.searchButton.addEventListener("click", () => {
    dom.showElement(dom.searchInput);
    dom.showElement(dom.closeButton);
    dom.hideElement(dom.searchButton);
    dom.hideElement(dom.appBarTitle);
    dom.addShadowToBottom(dom.appBar);
    dom.searchInput.focus();
  });
};
