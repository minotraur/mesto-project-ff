import { openModal, closeModal } from "./modal";

// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// DOM узлы
const content = document.querySelector(".content");
const places = content.querySelector(".places__list");

// Функция создания карточки
export function createCardElement(
  card,
  deleteCardHandler,
  likeCardHandler,
  imageModalHandler,
  popupImage
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__title").textContent = card.name;
  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(".card__image").alt = card.name;

  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");

  // Слушатель на удаление карточки
  cardDeleteButton.addEventListener("click", deleteCardHandler);
  // Слушатель на лайк
  cardLikeButton.addEventListener("click", function () {
    likeCardHandler(cardLikeButton);
  });
  // Слушатель на нажатие по карточке
  cardImage.addEventListener("click", function () {
    imageModalHandler(cardImage, popupImage);
  });

  return cardElement;
}

// Функция добавления карточки на страницу в конец
export function addCardToPage(cardElement) {
  places.append(cardElement);
}

// Функция добавления карточки на страницу в начало
export function addCardToPagePrepend(cardElement) {
  places.prepend(cardElement);
}

// Функция удаления карточки
export function deleteCard(event) {
  const cardToRemove = event.target.closest(".card");
  if (cardToRemove) {
    cardToRemove.remove();
  }
}

export function likeCard(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}

export function imageModal(cardImage, popupImage) {
  openModal(cardImage, popupImage, closeModal);
}
