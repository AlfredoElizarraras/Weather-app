import "./index.scss";
import { AppBarTopComponent } from "./app-bar-top/app-bar-topComponent";

AppBarTopComponent.render();
AppBarTopComponent.getSearchValueEvent((value) =>{
  alert(value);
});