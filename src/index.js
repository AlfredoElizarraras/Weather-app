import './index.scss';
import { AppBarTopComponent } from './app-bar-top/app-bar-topComponent';
import { CardComponent } from './card/cardComponent';
import { Weather } from './Models/weather';

const body = document.getElementsByTagName('body')[0];
AppBarTopComponent.render(body);
CardComponent.render(body);

window.onload = () => {
  AppBarTopComponent.addEvents();
  AppBarTopComponent.getSearchValueEvent((value) => {
    value = value.trim();
    if (value === '') return;

    Weather().findByCityName(value).then((newCard) => {
      if (!newCard.error) CardComponent.showCard(newCard);
      else alert(newCard.error.message);
    });
  });
};
