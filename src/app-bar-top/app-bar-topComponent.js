import './styles/app-bar-top.scss';
import { addClickEvent } from './events/searchButton';

export const AppBarTopComponent = (() => {
  const render = () => {
    addClickEvent();
  };

  return {
    render
  };
})();

