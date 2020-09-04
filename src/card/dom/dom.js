const createCardMarkUp = (cardInfo) => {
  return `
  <h3 class="card__title">${cardInfo.title}</h3>
    <span class="card__weather-description">${cardInfo.description}</span>
    <div class="card__info">
      <h4 class="card__info__main-temperature">${cardInfo.temperature}</h4>
       <img src="http://openweathermap.org/img/wn/${cardInfo.icon}@2x.png" />
    </div>`;
};

export const cardsRow = () => document.getElementById("cardsRow");
export const getCard = (card) => document.getElementById(card.id);

export const createCard = (cardInfo) => {
  const card = document.createElement("article");

  card.id = cardInfo.id;
  card.classList.add("card");
  card.innerHTML = createCardMarkUp(cardInfo);
  return card;
};

export const editCard = (cardInfo) =>
  getCard(cardInfo.id).innerHTML = createCardMarkUp(cardInfo);

export const displayCard = (card) => {
  cardsRow().appendChild(card);
};

export const addCardsContainer = (parent) => {
  parent.innerHTML += `
  <div id="content">
    <div id="cardsContainer" class="cards-container">
      <div id="cardsRow" class="cards-container__row">
      </div>
    </div>
  </div>
  `;
};
