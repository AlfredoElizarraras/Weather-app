import * as dom from "../dom/dom";

export const addClickEventToCloseButton = () => {
  dom.closeButton.addEventListener("click", () => {
    dom.showElement(dom.searchButton);
    dom.showElement(dom.appBarTitle);
    dom.hideElement(dom.searchInput);
    dom.hideElement(dom.closeButton);
    dom.removeShadowFromBottom(dom.appBar);
  });
};
