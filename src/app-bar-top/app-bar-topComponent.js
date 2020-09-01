import './styles/app-bar-top.scss';
import { addClickEventToSearchButton } from './events/searchButton';
import { addClickEventToCloseButton } from './events/closeButton';

export const AppBarTopComponent = (() => {
  const render = () => {
    addClickEventToSearchButton();
    addClickEventToCloseButton();
  };

  return {
    render
  };
})();

