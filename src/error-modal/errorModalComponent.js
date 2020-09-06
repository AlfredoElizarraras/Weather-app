import './styles/errorModal.scss';
import './dom/dom';
import modalWindowClick from './events/events';
import * as dom from './dom/dom';

const ErrorModalComponent = (() => {
  const showError = (cod, message) => {
    dom.changeInnerHTML(dom.errorTitle(), `Error ${cod}`);
    dom.changeInnerHTML(dom.errorMessage(), message);
    dom.showElement(dom.errorModal());
  };

  const addEvents = () => {
    modalWindowClick();
  };

  const render = (parent) => {
    dom.addToInnerHTML(parent, dom.createMarkUp());
  };

  return {
    render,
    addEvents,
    showError,
  };
})();

export default ErrorModalComponent;
