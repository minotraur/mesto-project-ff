// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// DOM узлы
const content = document.querySelector(".content");
const places = content.querySelector(".places__list");
const addButton = content.querySelector(".profile__add-button");

// Функция создания карточки
function createCardElement(cardTitle, cardImage) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  cardElement.querySelector(".card__image").src = cardImage;
  cardElement.querySelector(".card__title").textContent = cardTitle;

  cardDeleteButton.addEventListener("click", deleteCard);

  places.append(cardElement);
}

// Функция удаления карточки
function deleteCard(event) {
  const cardToRemove = event.target.closest(".card");
  if (cardToRemove) {
    cardToRemove.remove();
  }
}

// Вывести карточки на страницу
initialCards.forEach((cardInfo) => {
  createCardElement(cardInfo.name, cardInfo.link);
});
