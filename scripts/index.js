const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function createCard(cardName, cardLink, deleteCard) {
  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
  cardItem.querySelector('.card__title').textContent = cardName;
  cardItem.querySelector('.card__image').src = cardLink;
  cardItem.querySelector('.card__image').alt = cardName;
  
  const deleteBtn = cardItem.querySelector('.card__delete-button');
  deleteBtn.addEventListener('click', () => deleteCard(cardItem));
  return cardItem;
};

function deleteCard(cardItem) {
  cardItem.remove();
};

initialCards.forEach(function (card) {
  const cardItem = createCard(card.name, card.link, deleteCard);
  placesList.append(cardItem);
});
