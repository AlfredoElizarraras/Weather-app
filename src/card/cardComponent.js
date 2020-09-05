import './styles/card.scss';
import * as events from './events/events';
import * as dom from './dom/dom';
import * as convertions from './helpers/temperatureConvertions';

const CardComponent = (() => {
  const modifyCard = (card) => {
    if (dom.temperatureButtonIsActive(dom.celciusButton())) {
      const temperature = convertions.kelvinToCelcius(card.temperature);
      card.temperature = `${temperature}°C`;
    } else {
      const temperature = convertions.kelvinToFarenheit(card.temperature);
      card.temperature = `${temperature}°F`;
    }
    return card;
  };

  const showCard = (card) => {
    if (dom.getCard(card)) {
      dom.editCard(modifyCard(card));
    } else {
      dom.appendCard(dom.createCard(modifyCard(card)));
    }
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
    if (dom.temperatureButtonIsActive(dom.celciusButton())) return;
    dom.activateTemperatureButton(dom.celciusButton());
    dom.desactivateTemperatureButton(dom.farenheitButton());

    changeTemperatures();
  };

  const changeCelciusToFarenheit = () => {
    if (dom.temperatureButtonIsActive(dom.farenheitButton())) return;
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
