import './index.scss';
import { AppBarTopComponent } from './app-bar-top/app-bar-topComponent';
import { CardComponent } from './card/cardComponent';

const body = document.getElementsByTagName('body')[0];
AppBarTopComponent.render(body);
CardComponent.render(body);

window.onload = () => {
  AppBarTopComponent.addEvents();
  AppBarTopComponent.getSearchValueEvent((value) => {
    const card = {
      id: '1',
      title: value,
      description: 'clear sky',
      temperature: '25°C',
      icon: '01d',
    };
    CardComponent.showCard(card);
  });
};
