import "./styles/card.scss";
import * as dom from "./dom/dom";

export const CardComponent = (() => {
  const addCard = (card) => {
    if (dom.getCard(card)) return dom.editCard(card);
    else return dom.createCard(card);
  };

  const showCard = (card) => {
    dom.displayCard(addCard(card));
  };

  const render = (parent) => {
    if (parent) {
      dom.addCardsContainer(parent);
    }
  };

  return {
    render,
    showCard,
  };
})();
