const APIKEY = '384d66935b0b94de64704db43a531d6e';

export const getWeatherByCityName = (cityName) => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`, { mode: 'cors' });

export const getWeatherByCoordinates = (lat, lon) => fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`, { mode: 'cors' });