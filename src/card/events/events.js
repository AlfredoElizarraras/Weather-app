import * as dom from '../dom/dom';

export const celciusButtonClick = (func) => {
  dom.celciusButton().addEventListener('click', func);
};

export const farenheitButtonClick = (func) => {
  dom.farenheitButton().addEventListener('click', func);
};
