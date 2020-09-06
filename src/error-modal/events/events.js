/* eslint-disable no-restricted-globals */
import * as dom from '../dom/dom';

const closeErrorMessage = () => {
  dom.hideElement(dom.errorModal());
};

const checkTarget = (event) => {
  if (event.target === dom.closeErrorButton() || event.target === dom.errorModal()) {
    closeErrorMessage();
  }
};

const modalWindowClick = () => {
  window.addEventListener('click', checkTarget.bind(event));
};

export default modalWindowClick;
/* eslint-enable no-restricted-globals */