import './index.scss';
import { AppBarTopComponent } from './app-bar-top/app-bar-topComponent';
import { CardComponent } from './card/cardComponent';

const body = document.getElementsByTagName('body')[0];
AppBarTopComponent.render(body);
AppBarTopComponent.getSearchValueEvent((value) => {
});
