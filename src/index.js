import './index.scss';
import { AppBarTopComponent } from './app-bar-top/app-bar-topComponent';
import { CardComponent } from './card/cardComponent';

const body = document.getElementsByTagName('body')[0];
AppBarTopComponent.render(body);
CardComponent.render(body);

window.onload = () => {
  AppBarTopComponent.addEvents();
  AppBarTopComponent.getSearchValueEvent((value) => {
    value = value.trim();
    if (!value || value === '') return;
    getWeatherAndDisplayItsCard(value);
  });
};

async function getWeatherAndDisplayItsCard(cityName) {
  console.log(cityName);
  const response = await getWeatherByCityName(cityName);
  const cityData = await response.json();
  console.log(cityData);
  if (cityData.cod === 200) CardComponent.showCard(Card(cityData));
  else alert(cityData.message);
}

const Card = (weatherInfo) => {
  return {
    id: weatherInfo.id,
    title: weatherInfo.name,
    description: weatherInfo.weather[0].description,
    temperature: weatherInfo.main.temp,
    icon: weatherInfo.weather[0].icon
  };
};

const getWeatherByCityName = (cityName) => fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=384d66935b0b94de64704db43a531d6e`, {mode: 'cors'});

const getWeatherByCoordinates = (lon, lat) => fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=384d66935b0b94de64704db43a531d6e`, {mode: 'cors'});
