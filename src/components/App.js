import CardList from './CardList/CardList';

const getWantedPeople = async () => {
  // eslint-disable-next-line no-undef
  const response = await fetch('https://api.fbi.gov/wanted/v1/list');

  const data = await response.json();

  return data.items.map((item) => {
    return {
      src: item.images[0].original,
      fullName: item.title,
      sex: item.sex,
      nationality: item.nationality,
    }
  })
};

const App = async () => {
  // eslint-disable-next-line no-undef
  const div = document.createElement('div');
  div.classList.add('wrapper');

  const cardList = CardList({
    cards: await getWantedPeople(),
  });

  div.append(cardList);

  return div;
};

export default App;
