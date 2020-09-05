import './index.css';
import AppBarTopComponent from './app-bar-top/app-bar-topComponent';
import CardComponent from './card/cardComponent';
import Weather from './Models/weather';
import ErrorModalComponent from './error-modal/errorModalComponent';
import * as loadBar from './loadBar/loadBar';

const body = document.getElementsByTagName('body')[0];
AppBarTopComponent.render(body);
CardComponent.render(body);
ErrorModalComponent.render(body);

window.onload = () => {
  AppBarTopComponent.addEvents();
  ErrorModalComponent.addEvents();
  CardComponent.addEvents();

  AppBarTopComponent.getSearchValueEvent((value) => {
    value = value.trim();
    if (value === '') return;
    loadBar.showBar();

    Weather().findByCityName(value).then((newCard) => {
      loadBar.hideBar();
      if (!newCard.error) CardComponent.showCard(newCard);
      else ErrorModalComponent.showError(newCard.error.cod, newCard.error.message);
    });
  });
};
