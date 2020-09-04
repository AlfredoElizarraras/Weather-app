import * as data from './data/weatherAPI';
export const Weather = () => {
  const matchData = (weatherInfo) => {
    const returnValue = {
      id: null,
      title: null,
      description: null,
      temperature: null,
      icon: null,
      error: null
    };

    if (weatherInfo.cod === 200) {
      returnValue.id = weatherInfo.id;
      returnValue.title = weatherInfo.name;
      returnValue.description = weatherInfo.weather[0].description;
      returnValue.temperature = weatherInfo.main.temp;
      returnValue.icon = weatherInfo.weather[0].icon;
    }
    else {
      returnValue.error = 
      {
        cod: weatherInfo.cod,
        message: weatherInfo.message
      }
    }
    return returnValue;
  };

  async function findByCityName(cityName) {
    const response = await data.getWeatherByCityName(cityName);
    const cityData = await response.json();

    return matchData(cityData);
  }

  return {
    findByCityName,
  };
};