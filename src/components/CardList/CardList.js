import Card from '../Card/Card';

const CardList = (props) => {
  // eslint-disable-next-line no-undef
  const container = document.createElement('div');
  container.classList.add('Cards_block');

  const cardElements = props.cards.map(Card);

  container.append(...cardElements);

  return container;
};

export default CardList;
