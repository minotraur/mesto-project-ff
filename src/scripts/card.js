// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточки
export function createCardElement(
  card,
  deleteCardHandler,
  likeCardHandler,
  fillImageAndOpenPopupHandler,
  userId
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardLikeCounter = cardElement.querySelector(".like-counter");

  cardElement.querySelector(".card__title").textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;

  const isLiked = card.likes.some((like) => like._id === userId);
  if (isLiked) cardLikeButton.classList.add("card__like-button_is-active");
  cardLikeCounter.textContent = card.likes.length;

  if (card.owner._id === userId && deleteCardHandler) {
    // Слушатель на удаление карточки
    cardDeleteButton.addEventListener("click", () => {
      deleteCardHandler(card._id, cardElement);
    });
  } else {
    cardDeleteButton.remove();
  }

  if (likeCardHandler) {
    cardLikeButton.addEventListener("click", () =>
      likeCardHandler(card._id, cardLikeButton, cardLikeCounter)
    );
  }

  if (fillImageAndOpenPopupHandler) {
    // Новый слушатель на открытие модального окна
    cardImage.addEventListener("click", () =>
      fillImageAndOpenPopupHandler(card)
    );
  }

  return cardElement;
}

import { changeLikeStatus } from "./api";
export const handleLikeIconClick = (cardId, likeButton, likesCount) => {
  const isLiked = likeButton.classList.contains("card__like-button_is-active");
  changeLikeStatus(cardId, !isLiked)
    .then((cardData) => {
      likeButton.classList.toggle("card__like-button_is-active");
      likesCount.textContent = cardData.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const handleDeleteCardClick = (cardElement) => {
  cardElement.remove();
};
