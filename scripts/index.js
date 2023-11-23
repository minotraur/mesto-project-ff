// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// DOM узлы
const content = document.querySelector(".content");
const places = content.querySelector(".places__list");

// Функция создания карточки
function createCardElement(cardTitle, cardImage, deleteCardHandler) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  cardElement.querySelector(".card__image").src = cardImage;
  cardElement.querySelector(".card__image").alt =
    "Картинка на которой изображен " + cardTitle;

  cardElement.querySelector(".card__title").textContent = cardTitle;

  cardDeleteButton.addEventListener("click", deleteCardHandler);

  return cardElement;
}

// Функция добавления карточки на страницу
function addCardToPage(cardElement) {
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
  const newCard = createCardElement(cardInfo.name, cardInfo.link, deleteCard);
  addCardToPage(newCard);
});
