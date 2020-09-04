import './styles/card.scss';
import * as dom from './dom/dom';

const CardComponent = (() => {
  const addCard = (card) => {
    if (dom.getCard(card)) return dom.editCard(card);
    return dom.createCard(card);
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

export default CardComponent;