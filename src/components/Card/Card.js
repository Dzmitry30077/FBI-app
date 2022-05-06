const Card = (props) => {
  // eslint-disable-next-line no-undef
  const container = document.createElement('div');

  container.classList.add('card');

  // eslint-disable-next-line no-undef
  const img = document.createElement('img');
  img.src = props.src;

  // eslint-disable-next-line no-undef
  const fullName = document.createElement('h2');
  fullName.innerText = props.fullName;

  // eslint-disable-next-line no-undef
  const sex = document.createElement('p');
  if (props.sex) {
    sex.innerText = `Sex: ${props.sex}`;
  } else {
    sex.innerText = 'Sex: undefind';
  }

  // eslint-disable-next-line no-undef
  const nationality = document.createElement('p');
  if (props.nationality) {
    nationality.innerText = `Nationality: ${props.nationality}`;
  } else {
    nationality.innerText = 'Nationality: undefind';
  }

  container.append(img, fullName, sex, nationality);

  return container;
};

export default Card;
