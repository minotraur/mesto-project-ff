// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточки
export function createCardElement(
  card,
  deleteCardHandler,
  likeCardHandler,
  unlikeCardHandler,
  fillImageAndOpenPopupHandler,
  likeCount
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");

  cardElement.querySelector(".card__title").textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;

  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  if (card.owner._id === "b3d2403cd70daa5b0d061a84") {
    cardDeleteButton.style = "display:block;";
  } else {
    cardDeleteButton.style = "display:none;";
  }

  const cardLikeButton = cardElement.querySelector(".card__like-button");

  const cardLikeCounter = cardElement.querySelector(".like-counter");
  cardLikeCounter.textContent = likeCount;

  // Слушатель на удаление карточки
  cardDeleteButton.addEventListener("click", function () {
    deleteCardHandler(card, event);
  });

  // Слушатель на лайк
  cardLikeButton.addEventListener("click", function () {
    if (!cardLikeButton.classList.contains("card__like-button_is-active")) {
      likeCardHandler(card, event);
      cardLikeCounter.textContent = card.likes.length + 1;
    } else {
      unlikeCardHandler(card, event);
      cardLikeCounter.textContent = card.likes.length;
    }
  });

  // Новый слушатель на открытие модального окна
  cardImage.addEventListener("click", function () {
    fillImageAndOpenPopupHandler(card);
  });

  return cardElement;
}

// // Функция лайка карточки
// export function likeCard(likeButton) {
//   likeButton.classList.toggle("card__like-button_is-active");
// }
