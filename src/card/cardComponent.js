import './styles/card.scss';
import * as events from './events/events';
import * as dom from './dom/dom';
import * as convertions from './helpers/temperatureConvertions';

const CardComponent = (() => {
  const addCard = (card) => {
    if (dom.temperatureButtonIsActive(dom.celciusButton())) {
      const temperature = convertions.kelvinToCelcius(card.temperature);
      card.temperature = `${temperature}°C`;
    } else {
      const temperature = convertions.kelvinToFarenheit(card.temperature);
      card.temperature = `${temperature}°F`;
    }
    if (dom.getCard(card)) return dom.editCard(card);
    return dom.createCard(card);
  };

  const showCard = (card) => {
    dom.displayCard(addCard(card));
  };

  const changeTemperatures = (toCelcius = true) => {
    const tempsElements = dom.getTemperaturesFields();
    if (tempsElements && tempsElements.length > 0) {
      tempsElements.forEach((element) => {
        const cardTemperature = dom.getCardTemperature(element);
        if (toCelcius) {
          dom.changeInnerHTML(
            element,
            `${convertions.farenheitToCelcius(cardTemperature)}°C`,
          );
        } else {
          dom.changeInnerHTML(
            element,
            `${convertions.celciusToFarenheit(cardTemperature)}°F`,
          );
        }
      });
    }
  };

  const changeFarenheitToCelcius = () => {
    dom.activateTemperatureButton(dom.celciusButton());
    dom.desactivateTemperatureButton(dom.farenheitButton());

    changeTemperatures();
  };

  const changeCelciusToFarenheit = () => {
    dom.activateTemperatureButton(dom.farenheitButton());
    dom.desactivateTemperatureButton(dom.celciusButton());

    changeTemperatures(false);
  };

  const addEvents = () => {
    events.celciusButtonClick(changeFarenheitToCelcius);
    events.farenheitButtonClick(changeCelciusToFarenheit);
  };

  const render = (parent) => {
    if (parent) {
      dom.addCardsContainer(parent);
    }
  };

  return {
    render,
    addEvents,
    showCard,
  };
})();

export default CardComponent;
