import './index.scss';
import { AppBarTopComponent } from './app-bar-top/app-bar-topComponent';

const body = document.getElementsByTagName('body')[0];
AppBarTopComponent.render(body);
AppBarTopComponent.getSearchValueEvent((value) => {
});
