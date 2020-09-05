const createCardMarkUp = (cardInfo) => `
  <h3 class="card__title">${cardInfo.title}</h3>
    <span class="card__weather-description">${cardInfo.description}</span>
    <div class="card__info">
      <h4 class="card__info__main-temperature">${cardInfo.temperature}</h4>
       <img src="http://openweathermap.org/img/wn/${cardInfo.icon}@2x.png" />
    </div>`;

export const cardsRow = () => document.getElementById('cardsRow');
export const getCard = (card) => document.getElementById(card.id);

export const createCard = (cardInfo) => {
  const card = document.createElement('article');

  card.id = cardInfo.id;
  card.classList.add('card');
  card.innerHTML = createCardMarkUp(cardInfo);
  return card;
};

export const editCard = (cardInfo) => {
  getCard(cardInfo.id).innerHTML = createCardMarkUp(cardInfo);
};

export const displayCard = (card) => {
  cardsRow().appendChild(card);
};

export const celciusButton = () => document.getElementById('temperatureButtonCelcius');

export const farenheitButton = () => document.getElementById('temperatureButtonFarenheit');

export const activateTemperatureButton = (element) => {
  element.classList.add('active');
};

export const desactivateTemperatureButton = (element) => {
  element.classList.remove('active');
};

export const getTemperaturesFields = () => document.querySelectorAll('.card__info__main-temperature');

export const changeInnerHTML = (element, content) => {
  element.innerHTML = content;
};

export const getCardTemperature = (element) => {
  let returnValue = element.innerHTML.replace('°C', '');
  returnValue = element.innerHTML.replace('°F', '');
  return returnValue;
};

export const temperatureButtonIsActive = (element) => element.classList.contains('active');

export const addCardsContainer = (parent) => {
  parent.innerHTML += `
  <div id="content">
    <div id="cardsContainer" class="cards-container">
      <div class="cards-container__temperature-buttons">
        <button id="temperatureButtonCelcius" class="temperature-button active">
          <svg id="Layer_1" enable-background="new 0 0 496 496" height="32" viewBox="0 0 496 496" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m376.5 397c0 20.402-16.598 37-37 37s-37-16.598-37-37c0-14.675 8.587-27.38 21-33.358v-200.642c0-8.837 7.163-16 16-16s16 7.163 16 16v200.642c12.413 5.978 21 18.683 21 33.358zm-276-353c0 24.262-19.738 44-44 44s-44-19.738-44-44 19.738-44 44-44 44 19.738 44 44zm-32 0c0-6.617-5.383-12-12-12s-12 5.383-12 12 5.383 12 12 12 12-5.383 12-12zm150.197 130.549c-6.815-5.624-16.899-4.657-22.524 2.159-21.679 26.279-64.673 10.972-64.673-23.208v-47c0-34.151 42.972-49.504 64.672-23.21 5.625 6.815 15.71 7.78 22.524 2.155 6.815-5.625 7.78-15.709 2.155-22.524-13.071-15.838-32.334-24.921-52.851-24.921-37.771 0-68.5 30.729-68.5 68.5v47c0 37.771 30.729 68.5 68.5 68.5 20.521 0 39.787-9.086 52.856-24.927 5.624-6.816 4.658-16.9-2.159-22.524zm264.803-102.549c0 8.837-7.163 16-16 16h-61v68h41c8.837 0 16 7.163 16 16s-7.163 16-16 16h-41v68h21c8.837 0 16 7.163 16 16s-7.163 16-16 16h-21v36.11c20.432 18.722 32 44.863 32 72.89 0 54.589-44.411 99-99 99s-99-44.411-99-99c0-28.026 11.568-54.168 32-72.89v-257.11c0-36.944 30.056-67 67-67 33.197 0 60.817 24.273 66.082 56h61.918c8.837 0 16 7.163 16 16zm-77 325c0-20.799-9.416-40.065-25.835-52.86-3.891-3.031-6.165-7.688-6.165-12.62v-264.52c0-19.299-15.701-35-35-35s-35 15.701-35 35v264.52c0 4.933-2.274 9.589-6.165 12.62-16.419 12.795-25.835 32.061-25.835 52.86 0 36.944 30.056 67 67 67s67-30.056 67-67z"/></svg>
        </button>
        <button id="temperatureButtonFarenheit" class="temperature-button">
          <svg id="Layer_1" enable-background="new 0 0 496 496" height="32" viewBox="0 0 496 496" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m376.5 397c0 20.402-16.598 37-37 37s-37-16.598-37-37c0-14.675 8.587-27.38 21-33.358v-200.642c0-8.837 7.163-16 16-16s16 7.163 16 16v200.642c12.413 5.978 21 18.683 21 33.358zm-276-353c0 24.262-19.738 44-44 44s-44-19.738-44-44 19.738-44 44-44 44 19.738 44 44zm-32 0c0-6.617-5.383-12-12-12s-12 5.383-12 12 5.383 12 12 12 12-5.383 12-12zm140.5-6h-73.5c-8.836 0-16 7.163-16 16v119.5c0 8.837 7.164 16 16 16s16-7.163 16-16v-38.75h29.5c8.836 0 16-7.163 16-16s-7.164-16-16-16h-29.5v-32.75h57.5c8.836 0 16-7.163 16-16s-7.164-16-16-16zm274.5 34c0 8.837-7.163 16-16 16h-61v68h41c8.837 0 16 7.163 16 16s-7.163 16-16 16h-41v68h21c8.837 0 16 7.163 16 16s-7.163 16-16 16h-21v36.11c20.432 18.722 32 44.863 32 72.89 0 54.589-44.411 99-99 99s-99-44.411-99-99c0-28.026 11.568-54.168 32-72.89v-257.11c0-36.944 30.056-67 67-67 33.197 0 60.817 24.273 66.082 56h61.918c8.837 0 16 7.163 16 16zm-77 325c0-20.799-9.416-40.065-25.835-52.86-3.891-3.031-6.165-7.688-6.165-12.62v-264.52c0-19.299-15.701-35-35-35s-35 15.701-35 35v264.52c0 4.933-2.274 9.589-6.165 12.62-16.419 12.795-25.835 32.061-25.835 52.86 0 36.944 30.056 67 67 67s67-30.056 67-67z"/></svg>
        </button>
      </div>
      <div id="cardsRow" class="cards-container__row">
      </div>
    </div>
  </div>
  `;
};
